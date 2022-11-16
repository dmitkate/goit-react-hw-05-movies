import { useState,useEffect } from 'react';
import { Gallery } from 'components/gallery.jsx';
import  Search  from '../components/search';
import { FetchAPIName } from '../components/fetch.js';
import { useSearchParams } from 'react-router-dom';
import css from '../components/app.module.css';
const Movies = () => {
    
    const [masName, setMasName] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    
    useEffect(() => {

        const query = searchParam.get('query')
       
    if (!query) {
      return;
    }
         FetchAPIName(query).then(response => { setMasName(response.results) })
     },[searchParam])
 

    const onFormSubmit = value => {
    setSearchParam(value ? { query: value } : {});
  };
        return (
            <main className={css.container} >
                <Search onSubmit={ onFormSubmit} />               
                <Gallery  gallerys={masName} />  
            </main>
        );
    };


export default Movies;