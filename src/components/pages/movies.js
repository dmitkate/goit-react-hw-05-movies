import { FiSearch } from 'react-icons/fi';
import { useState,useEffect} from 'react';
import { Gallery } from 'components/gallery.jsx';
import { FetchAPIName } from '../fetch.js';
export const Movies = () => {
    const [name, setName] = useState('');
    const [masName, setMasName] = useState([]);
    
    useEffect(() => {
            if (name.trim() === '') {
      return;
    }
         FetchAPIName(name).then(response => { setMasName(response.results) })
     },[name])
 
        const  handleNameChange = e => {
            setName(e.currentTarget.value.toLowerCase());
          
           
    };

    const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
     console.log('ENTER Name!!!');
      return;
    }
    //  this.props.search(name);
         setName('');
  };
        return (
            <main >
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"                    
                        type="text"
                        onChange={handleNameChange}
                        value={name}
                        autoComplete="on"
                        autoFocus
                        placeholder="Enter a title" />
                    <button type="submit" ><FiSearch /></button>
             </form>
                  <Gallery gallerys={masName} />  

            </main>
        );
    };


