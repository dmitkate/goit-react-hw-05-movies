import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Cast from './cast';
import Reviews from './reviews';
import Layout from './layout';
const HomePage = lazy(() => import('../pages/homePage'));
const NotFound = lazy(() => import('../pages/notFound'));
const Movies = lazy(() => import('../pages/movies.js'));
const MoviesDetail = lazy(() => import('../pages/movieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};
