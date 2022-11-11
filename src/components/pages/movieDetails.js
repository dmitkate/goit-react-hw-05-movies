import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { FetchAPIDetail } from "../fetch";
import css from '../app.module.css';
export const MoviesDetail = () => {
  const [id, setId] = useState(null);

 const { movieId } = useParams();
useEffect(() => {
    

     FetchAPIDetail(movieId).then(response => {
    
      setId(response);
    });
  }, [movieId]);

  
  return ( 
    <main className={css.body}>
      <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${id.poster_path}`}
        alt="poster"
      />
      <h2>
        {id.title ?? id.name} 
      </h2>
      <p>User score: {id.vote_average}</p>
      {/* <p>Genres: {id.genres.map(genr => genr.name).join(', ')}</p> */}
      <p>{id.overview}</p>
    </div>
    </main>
  );
};
