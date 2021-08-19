import Header from './components/Header';
import Home from './components/Home';

// import styled from 'styled-components'
import {GlobalStyle} from './GlobalStyle'
//^^here, we imported a global version of the line above it, allowing us to call on and use this styling outside of App.js

//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router'

function App() {
  return (
      //this is an "App" component, as defined below
    <div className="App">
        <Header/>
        <Home/>
      {/*Start here.*/}
        <GlobalStyle/>
    {/*  ^^^  brought in the styling within the div*/}
    </div>
  );
}

////es6 syntax
// const Star = () => React.createElement('div', null, 'This is a little star');
// const App = () => {
//     return Star();
// }

export default App;
