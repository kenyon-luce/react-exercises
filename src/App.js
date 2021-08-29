import React from 'react';

//Routing
import {BrowserRouter as Router, /*Switch,*/ Route} from "react-router-dom";
import {Routes} from "react-router";

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
        {/*^^since Routes cannot be used in my case, I will use Switch instead*/}
        <Routes>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/:movie'>
                <Movie/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Routes>

        <GlobalStyle/>
    </Router>
);

export default App;
