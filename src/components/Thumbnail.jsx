import { cn } from '../lib/utils';
import { MediaItemView } from './MediaItemView';

export function Thumbnail({ project, media = project.media.previewLoop || project.media.hero, className, overlay = 'none', priority = false }) {
  const fallback = media.kind === 'video' ? project.media.hero : undefined;

  return (
    <div className={cn('media-frame', className)} style={media.aspectRatio ? { aspectRatio: media.aspectRatio } : undefined}>
      <MediaItemView media={media} fallback={fallback} priority={priority} className="media-frame__asset" />
      {overlay === 'door' && (
        <div className="door-overlay">
          <span className="door-overlay__number">0{project.category === 'Labor' ? '1' : project.category === 'Politics' ? '2' : '3'}</span>
          <span className="door-overlay__title">{project.category.toUpperCase()}</span>
        </div>
      )}
      {overlay === 'project' && (
        <div className="project-overlay">
          <span className="project-overlay__title">{project.title}</span>
          <span className="project-overlay__category">{project.category}</span>
        </div>
      )}
    </div>
  );
}
