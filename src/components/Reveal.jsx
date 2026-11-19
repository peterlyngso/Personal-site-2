import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export function Reveal({ children, className, delay = 0, animation = 'up', margin = '-50px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { rootMargin: margin });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={cn('reveal-base', animation === 'scale' && 'reveal-scale', animation === 'none' && 'reveal-none', isVisible && 'reveal-visible', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
