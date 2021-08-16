import React from 'react';

//importing config.js
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//importing components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from "./SearchBar";

//importing custom hook
import {useHomeFetch} from '../hooks/useHomeFetch';

//importing image (default image)
import DefaultImage from '../images/no_image.jpg';

const Home = () => {
    //since we a custom hook, we can call on its objects in order to use them
    const {state,loading, error, setSearchTerm} = useHomeFetch(); //IMPORTANT: since useHomeFetch is a function grabbing values from the movie API, we need to include "()"

    console.log(state)
    //QUESTION: why does it log the same results array 4 times when logging the state?
    //ANSWER: React re renders every time a state is changed. This should not affect the performance of the page as it only displays the most updated information

    // useEffect(() => {
    //     fetchMovies(1, "search")
    // }, [])
    // //^^returns first page of movies containing the word ("search") in their title

    // return <div>Home Page</div>
    return (
        //IMPORTANT: you can only return one parent tag at a time, so we will need to wrap everything in one tag. In this case, we are using a fragment (or empty tag) to wrap all our other tags, since we don't want to create a div
        <>
            {/*here it will display the hero image if there are results available, if not it will return null and fall back*/}
            {state.results[0] ?
                <HeroImage //giving it props using string literal
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                    //some of these methods are getting errors, that is because they are coming directly from the Movie Database API
                />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/> {/*when a term is "set" in here, it will set the search term in our fetch */}
            {/*creating grid to display list of popular movies*/}
            <Grid header={'Popular Movies'}>
                {state.results.map(movie => (
                    // <div key={movie.id}>{movie.title}</div> //returns movie title from each result
                    // //giving each div a key makes each movie result unique
                    <Thumb
                        key={movie.id}
                        clickable
                        image={ movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : DefaultImage }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner/>
        </>
    )
}

//ALWAYS EXPORT the component so it can be compiled correctly
export default Home;