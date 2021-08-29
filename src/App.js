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
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:movieId' element={<Movie/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        {/*<Switch>*/}
        {/*    <Route exact path='/'>*/}
        {/*        <Home/>*/}
        {/*    </Route>*/}
        {/*    <Route exact path='/:movie'>*/}
        {/*        <Movie/>*/}
        {/*    </Route>*/}
        {/*    <Route>*/}
        {/*        <NotFound/>*/}
        {/*    </Route>*/}
        {/*</Switch>*/}
        <GlobalStyle/>
    </Router>
);

export default App;
