import { useEffect } from 'react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Navigation } from './components/Navigation';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProjectSlug } from './pages/ProjectSlug';
import { WorkCategory } from './pages/WorkCategory';

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <div className="portfolio-shell">
        <Navigation />
        <main className="portfolio-shell__main">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/work/:category" component={WorkCategory} />
            <Route path="/project/:slug" component={ProjectSlug} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </WouterRouter>
  );
}
