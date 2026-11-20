import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '../lib/utils';

const links = [
  { href: '/work/Labor', label: 'Labor' },
  { href: '/work/Politics', label: 'Politics' },
  { href: '/work/Documentary', label: 'Documentary' },
  { href: '/about', label: 'About' },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const wideScreen = window.matchMedia('(min-width: 768px)');
    const onWidthChange = () => {
      if (wideScreen.matches) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    wideScreen.addEventListener('change', onWidthChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      wideScreen.removeEventListener('change', onWidthChange);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} className={cn('site-nav', scrolled && 'site-nav--scrolled', menuOpen && 'site-nav--open')} aria-label="Primary navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}>
      <Link href="/" className="site-nav__wordmark" onClick={() => setMenuOpen(false)}>Peter Lyngso</Link>
      <button
        ref={toggleRef}
        type="button"
        className="site-nav__toggle"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <div id="primary-navigation-links" className="site-nav__links">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} aria-current={location.startsWith(link.href) ? 'page' : undefined} className={cn('site-nav__link', location.startsWith(link.href) && 'site-nav__link--active')}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
