import axios from 'axios';
const api_key = 'c7521506bd77e311ff16e8bd340fb525';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const FetchAPI= async() => {
     const response = await axios.get(
        `/trending/all/day?api_key=${api_key}`
    );
    
    return response.data;
}
        
export const FetchAPIName= async(name) => {
     const response = await axios.get(
        `/search/movie?api_key=${api_key}&language=en-US&query=${name}&page=1&include_adult=false`
    );
    
    return response.data;
}

export const FetchAPIDetail= async(movieId) => {
     const response = await axios.get(
        `/movie/${movieId}?api_key=${api_key}&language=en-USe`
    );

    return response.data;
}