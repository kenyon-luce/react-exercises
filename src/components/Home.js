import React, {useState} from 'react';
//importing config.js
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
//importing components

//importing hook
//importing image (default image)
import DefaultImage from '../images/no_image.jpg';

const Home = () => {
    //importing and using use state gives us an array of boolean or "state" values
    const [state, setState] = useState();
    //set default to false
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return <div>Home Page</div>
}

//ALWAYS EXPORT the component so it can be compiled correctly
export default Home;