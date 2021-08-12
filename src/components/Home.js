import React, {useState, useEffect} from 'react';
//importing API
import API from '../API'
//importing config.js
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
//importing components

//importing hook

//importing image (default image)
import DefaultImage from '../images/no_image.jpg';

const Home = () => {
    //importing and using use state gives us an array of boolean or "state" values

    const [state, setState] = useState(); //set default to false
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        //async function lets us grab information from our api
        //searchTerm will use a state value but when a search term isn't passed in it will default to an empty string as defined in the parameter
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);

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
    //initial render (first page)
    useEffect(() => {
        fetchMovies(1)
    }, [])
    //^^since we didn't define what we are searching for, the first page returns the most popular movies currently (as declared in API.js ln 19-24)
    //*each page can have up to 1000 results

    console.log(state)
    //QUESTION: why does it log the same results array 4 times when logging the state?
    //ANSWER: React re renders every time a state is changed. This should not affect the performance of the page as it only displays the most updated information

    // useEffect(() => {
    //     fetchMovies(1, "search")
    // }, [])
    // //^^returns first page of movies containing the word ("search") in their title

    return <div>Home Page</div>
}

//ALWAYS EXPORT the component so it can be compiled correctly
export default Home;