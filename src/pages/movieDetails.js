import { Outlet, useParams, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { FetchAPIDetail } from "../components/fetch";
import { Link } from 'react-router-dom';
//import css from 'components/app.module.css';
const MoviesDetail = () => {
  
  const [id, setId] = useState([]); 
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
    useEffect(() => {
     
          FetchAPIDetail(movieId).then(response => { setId(response) })
    }, [movieId])
    if (!id) return;
  return ( 
    <main >
      <div>
        <Link to={backLinkHref}>Back home</Link>
       <img
         src={`https://image.tmdb.org/t/p/w300/${id.poster_path}`}
        alt="poster"
      />
      <h2>
        {id.title ?? id.name} 
      </h2>
      <p>User score: {id.vote_average}</p>
       
     <p>{id.overview}</p> 
      </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
      <Link to={`cast`}>cast</Link>
      <Link to={`reviews`}>reviews</Link>
    
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MoviesDetail;