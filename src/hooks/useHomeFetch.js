//custom hooks
//moving logic into here so we can re use it
import {useState, useEffect} from 'react';

//importing API
import API from '../API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState); //set default state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = '') => {
        //async function lets us grab information from our api
        //searchTerm will use a state value but when a search term isn't passed in it will default to an empty string as defined in the parameter
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies);

            setState(prev => ({ //returning an object
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                //^^the "..." is used to grab all of the requested results and "spread" it into the results array. Appends a new list of movies to the previous list if the results return more than one page. If we are not loading more we can just wipe out the previous list
            }))
        } catch (error) {
            setError(true);
        }
        //since we had set the loading to true, we have to set it to false when we have grabbed all the movies
        setLoading(false);
    }
    //initial render and search (first page)
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm]) //will trigger again each time a search term is passed
    //^^since we didn't define what we are searching for, the first page returns the most popular movies currently (as declared in API.js ln 19-24)
    //*each page can have up to 1000 results

    //load more
    useEffect(() => {
        if(!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
};

