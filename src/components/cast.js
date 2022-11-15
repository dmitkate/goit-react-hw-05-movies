import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FetchAPICast } from "./fetch";
//import css from './app.module.css';
const Cast = () => {
  const [actors, setActors] = useState();
  const { movieId } = useParams();

  const onError = event => {
    event.target.src =
      'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
    event.target.style.height = '140px';
    event.target.style.width = '90px';
  };
     useEffect(() => {
    (async function () {
     await FetchAPICast(movieId)
       .then(response => { setActors(response) })
     
    })();
}, [movieId]);
  
  if (!actors) return;
  return (
    <ul>
      {actors.cast.map(({id,name,profile_path}) => (
        <li key={id}>
            <img
              alt={name}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
              onError={onError}
             
            /><h3>{name}</h3></li>
      ))}
</ul>) 
};
export default Cast;