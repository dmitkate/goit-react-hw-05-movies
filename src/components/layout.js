import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import css from './app.module.css';
export default function Layout() {
  return (
   
    <div >
          <header className={css.nav}>
        <nav  className={css.container}>
          <Link className={css.linkNav} to="/">Home</Link>
          <Link className={css.linkNav} to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
    </Suspense>
    </div>
  );

}