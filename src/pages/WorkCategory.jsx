import { Link, useRoute } from 'wouter';
import { projects } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Thumbnail } from '../components/Thumbnail';

export function WorkCategory() {
  const [, params] = useRoute('/work/:category');
  const category = params?.category;
  const categoryProjects = projects.filter(
    (project) => project.category.toLowerCase() === category?.toLowerCase(),
  );

  if (!categoryProjects.length) {
    return (
      <main className="case-study">
        <SEO title="Category Not Found" />
        <p className="case-study__eyebrow">Category not found</p>
        <Link href="/" className="case-study__link">Return home</Link>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${category} Work`} />
      <main className={`category-page category-page--${category.toLowerCase()}`}>
        <Reveal className="category-heading">
          <h1>{category}</h1>
          <p>{categoryProjects.length} projects<br />Selected work</p>
        </Reveal>
        <div className="category-list">
          {categoryProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.08} className="category-project">
              <Link href={`/project/${project.slug}`} className="block">
                <Thumbnail project={project} overlay="project" className="category-project__media" aspectRatio="16 / 10" />
                <div className="category-project__caption">
                  {project.clientOutlet ? <p>{project.clientOutlet}</p> : null}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
