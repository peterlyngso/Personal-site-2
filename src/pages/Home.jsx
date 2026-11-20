import { Link } from 'wouter';
import { homeCuration, projects } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Thumbnail } from '../components/Thumbnail';

export function Home() {
  const selectedProjects = homeCuration.selectedWork
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO title="Selected Work" />
      <main className="landing">
        <div className="door-grid">
          {homeCuration.doors.map((door, index) => {
            const project = projects.find((item) => item.slug === door.projectSlug);
            if (!project) return null;
            return (
              <Reveal key={door.category} delay={index * 0.08} className="door-link">
                <Link href={`/work/${door.category}`} className="door-link">
                  <Thumbnail project={project} media={door.media} overlay="door" className="media-frame--door" priority />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* <section className="selected-work" aria-label="Selected projects">
          <div className="mosaic">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.08} className="mosaic__item">
                <Link href={`/project/${project.slug}`} className="block">
                  <Thumbnail project={project} overlay="project" className="mosaic__media" aspectRatio="16 / 10" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section> */}
      </main>
    </>
  );
}
