import { FiSearch } from 'react-icons/fi';
import { useState,useEffect } from 'react';
import { Gallery } from 'components/gallery.jsx';
import { FetchAPIName } from '../components/fetch.js';
import { useSearchParams } from 'react-router-dom';
export const Movies = () => {
    //const [name, setName] = useState('');
    const [masName, setMasName] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    
    useEffect(() => {

        const query = searchParam.get('query')
        //if (query.trim() === '') {
    if (!query) {
      return;
    }
         FetchAPIName(query).then(response => { setMasName(response.results) })
     },[searchParam])
 
    const  handleNameChange = e => {
        //setName(e.currentTarget.value.toLowerCase());
        setSearchParam({query: e.currentTarget.value})
    };

    const handleSubmit = e => {
    e.preventDefault();

    //if (name.trim() === '') {
    // console.log('ENTER Name!!!');
    //  return;
    //}
        
    //  this.props.search(name);
        //setName('');
        //setSearchParam({query:e.currentTarget.value})
    };
    
        return (
            <main >
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"                    
                        type="text"
                        onChange={handleNameChange}
                        value={searchParam.get('query')}
                        autoComplete="on"
                        autoFocus
                        placeholder="Enter a title" />
                    <button type="submit" ><FiSearch /></button>
             </form>
                  <Gallery gallerys={masName} />  

            </main>
        );
    };


