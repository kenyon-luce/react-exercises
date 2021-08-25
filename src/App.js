import React from 'react';

//Routing
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/:movie'>
                <Movie/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>

        <GlobalStyle/>
    </Router>
);

export default App;
