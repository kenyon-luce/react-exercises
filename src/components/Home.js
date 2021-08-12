import React, {useState, useEffect} from 'react';

//importing config.js
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//importing components

//importing custom hook
import {useHomeFetch} from '../hooks/useHomeFetch';

//importing image (default image)
import DefaultImage from '../images/no_image.jpg';

const Home = () => {
    //since we a custom hook, we can call on its objects in order to use them
    const {state,loading, error} = useHomeFetch;

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