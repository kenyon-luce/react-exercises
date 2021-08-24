import React from 'react';

//Routing
import { BrowserRouter as Router, Route} from "react-router-dom";

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from "./components/NotFound";

//Styling
import {GlobalStyle} from './GlobalStyle'

const App = () => (
    <Router>
        <Header/>
        {/*<Routes>*/}
        {/*    <Route path='/' element={<Home/>}/>*/}
        {/*    <Route path='/:movieId' element={<Movie/>}/>*/}
        {/*</Routes>*/}
        {/*^^since importing Routes isn't working, I will just do each individual Route*/}
        <Route path='/'>
            <Home/>
        </Route>
        <Route path='/:movie'>
            <Movie/>
        </Route>
        <Route path='/*'>
            <NotFound/>
        </Route>
        <GlobalStyle/>
    </Router>
);

export default App;
