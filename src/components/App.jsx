import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { NotFound } from './pages/notFound';
import { Movies } from './pages/movies';
import { MoviesDetail } from './pages/movieDetails';
import { Cast } from './pages/cast';
import { Reviews } from './pages/reviews';
import css from './app.module.css';
export const App = () => {
  return (
    <div className={css.body}>
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
