import {useState, useEffect} from 'react';
import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovies(movieId);
                const credits = await API.fetchCredits(movieId);
                //Directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                //exporting state object
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchMovie();
    }, [movieId])

    return {state, loading, error};
}