import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

function DarkFallback({ className }) {
  return <div className={cn('media-fallback', className)} aria-hidden="true" />;
}

export function MediaItemView({ media, fallback, priority = false, className }) {
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const videoRef = useRef(null);
  const fallbackMedia = fallback?.kind === 'image' && fallback.src ? fallback : undefined;
  const fallbackSrc = media.poster || fallbackMedia?.src;

  useEffect(() => setHasError(false), [media.src, media.kind]);

  useEffect(() => {
    if (priority || !videoRef.current || !('IntersectionObserver' in window)) {
      if (!('IntersectionObserver' in window)) setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '240px 0px' });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [priority]);

  if (hasError || !media.src) {
    if (fallbackSrc) {
      return (
        <img
          className={className}
          src={fallbackSrc}
          alt={fallbackMedia?.alt || media.alt}
          style={{ objectPosition: fallbackMedia?.objectPosition || media.objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      );
    }
    return <DarkFallback className={className} />;
  }

  if (media.kind === 'video') {
    return (
      <video
        ref={videoRef}
        src={isVisible ? media.src : undefined}
        poster={fallbackSrc}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? 'auto' : 'metadata'}
        className={className}
        aria-label={media.alt}
        style={{ objectPosition: media.objectPosition }}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <img
      className={className}
      src={media.src}
      alt={media.alt}
      style={{ objectPosition: media.objectPosition }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}
