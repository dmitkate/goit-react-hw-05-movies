import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { FetchAPIReviews } from "./fetch";
import css from './app.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();


     useEffect(() => {
    (async function () {
     await FetchAPIReviews(movieId)
       .then(response => { setReviews(response) })
     
    })();
}, [movieId]);
  
  if (!reviews) return;
    
   return (reviews.results.length ?(<ul >
      {reviews.results.map(({id, author, content}) => (
          <li key={id} className={css.reviewsItem}>
              <h4 className={css.reviewsH}>{author}</h4>
              <p>{content}</p>
        </li>
      ))}
</ul>):(<p>not reviews</p>))
 
  
   

};

export default Reviews;