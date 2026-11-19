import { useEffect } from 'react';

export function SEO({ title, description }) {
  useEffect(() => {
    const siteName = 'Peter Lyngso | Filmmaker & Media Strategist';
    const defaultDescription =
      'Filmmaker and media strategist whose work sits inside labor movements, political campaigns, and documentary reporting.';
    const resolvedTitle = title ? `${title} — ${siteName}` : siteName;
    const resolvedDescription = description || defaultDescription;

    document.title = resolvedTitle;
    const tags = [
      ['name', 'description', resolvedDescription],
      ['property', 'og:title', resolvedTitle],
      ['property', 'og:description', resolvedDescription],
      ['property', 'og:type', 'website'],
      ['name', 'twitter:card', 'summary'],
      ['name', 'twitter:title', resolvedTitle],
      ['name', 'twitter:description', resolvedDescription],
    ];

    tags.forEach(([attribute, key, content]) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description]);

  return null;
}
