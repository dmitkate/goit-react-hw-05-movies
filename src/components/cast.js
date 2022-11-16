import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FetchAPICast } from "./fetch";
import css from './app.module.css';
const Cast = () => {
  const [actors, setActors] = useState();
  const { movieId } = useParams();

  const onError = event => {
    event.target.src =
      'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
 
  };
     useEffect(() => {
    (async function () {
     await FetchAPICast(movieId)
       .then(response => { setActors(response) })
     
    })();
}, [movieId]);
  
  if (!actors) return;
  return (
    <ul className={css.cast}>
      {actors.cast.map(({id,name,profile_path,character}) => (
        <li className={css.castList} key={id}>
          <img
              className={css.castimg}
              alt={name}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
              onError={onError}
              width='180'
              height='260'
          />
          <h3 className={css.casttext}>{name}</h3>
          <p className={css.casttext}>{character}</p>
        </li>
      ))}
</ul>) 
};
export default Cast;