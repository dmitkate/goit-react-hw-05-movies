import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy } from 'react';
import Cast from './cast';
import Reviews from './reviews';

const HomePage = lazy(() => import('../pages/homePage'));
const NotFound = lazy(() => import('../pages/notFound'));
const Movies = lazy(() => import('../pages/movies.js'));
const MoviesDetail = lazy(() => import('../pages/movieDetails'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            HOME
          </NavLink>
          <NavLink to="/movies">MOVIES</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
