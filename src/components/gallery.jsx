import css from './app.module.css';
import { Link } from 'react-router-dom';
export const Gallery = ({ gallerys }) => {
  const onError = event => {
    event.target.src =
      'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
    event.target.style.height = '540px';
    event.target.style.width = '360px';
  };
  return (
    <ul className={css.gallery}>
      {gallerys.map(({ id, poster_path = '', title, name }) => (
        <li key={id} className={css.galleryItem}>
          <Link to={`/movies/${id}`} className={css.galleryLink}>
            <img
              className={css.galleryImg}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title || name}
              onError={onError}
            />
            <h3>{title || name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
