import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './app.module.css';
const Search = ({onSubmit}) => {
     const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => setQuery(searchParams.get('query') ?? ''), [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query.trim().toLowerCase());
  };

  const handleNameChange = ({ target }) => {
    setQuery(target.value);
  };

    return (
         <form  className={css.form} onSubmit={handleSubmit}>
                    <input
                       className={css.inp}
                        name="name"                    
                        type="text"
                        onChange={handleNameChange}
                        value={query}
                        autoComplete="on"
                        autoFocus
                        placeholder="Enter a title" />
                    <button className={css.btn} type="submit" ><FiSearch  className={css.btnImg} width='20px' height='20px'/></button>
             </form>
    )
    
}
export default Search;