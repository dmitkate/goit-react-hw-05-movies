import { Outlet, useParams, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { FetchAPIDetail } from "../components/fetch";
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import css from 'components/app.module.css';
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
    <main className={css.container}>
      
        <Link className={css.detailBtn} to={backLinkHref}><FiArrowLeft/>BACK</Link>
       <div className={css.detail}>
       <img
         src={`https://image.tmdb.org/t/p/w300/${id.poster_path}`}
        alt="poster"
        />
        <div className={css.detailtext}>
      <h2>
        {id.title ?? id.name} 
      </h2>
      <p>User score: {id.vote_average}</p>
       
     <p>{id.overview}</p> </div>
      </div>
       
      <Link className={css.linkNav} to={`cast`}>cast</Link>
      <Link className={css.linkNav} to={`reviews`}>reviews</Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MoviesDetail;