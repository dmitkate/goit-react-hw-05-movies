import { FetchAPI} from '../components/fetch.js';
import { useEffect, useState } from 'react';
import { Gallery } from 'components/gallery.jsx';
import css from 'components/app.module.css';
function HomePage() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        FetchAPI().then(response => { setTrends(response.results) })
    }, [])
    
    return (<div className={css.container}>
        <h2 className={css.galleryTitle}>Trending Tooday</h2>
        <Gallery gallerys={trends} />
    </div>
       
    )
}
export default HomePage;