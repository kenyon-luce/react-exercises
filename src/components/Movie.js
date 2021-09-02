import React from 'react';
import {useParams} from 'react-router-dom';
import {API_KEY, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import Grid from './Grid';
import Spinner from './Spinner';
import NoImage from '../images/no_image.jpg';
import {useMovieFetch} from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from './Actor'

const Movie = () => { //using brackets because we want to include logic for fetching info from the API
    const {movieId} = useParams(); //gives us the id of the movie so we can get info for that soecific movie

    const {state: movie, loading, error} = useMovieFetch(movieId);
    //you can change the name of a property using ':'
    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong...</div>;

    console.log(movie.actors)
    return (
        <>
            {/*<div>Movie</div>*/}
            <BreadCrumb movieTitle={movie.original_title}/>
        {/*    ^^just a small note, the original_title property was not being called on because in my fetch hook I called on the plural version of the function, which was retrieving a list of movies rather than the info for a singular one, this issue was fixed after an hour by removing the 's' :D */}
            <MovieInfo movie={movie}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            <Grid header='Actors'>
                {/* {movie.actors.map(actor => (
                    <Actor
                        key={actor.character}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                    />
                ))} */}
            </Grid>
        </>
    )
}

export default Movie;