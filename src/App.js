import React, {useState} from 'react';
import Header from './components/Header';

// import styled from 'styled-components'
import {GlobalStyle} from './GlobalStyle'
//^^here, we imported a global version of the line above it, allowing us to call on and use this styling outside of App.js

//Components
// const Star = () => React.createElement('div', null, 'This is a little star');

function App() {
  return (
      //this is an "App" component, as defined below
    <div className="App">
        <Header/>
      Start here.
        <GlobalStyle/>
    {/*  ^^^  brought in the styling within the div*/}
    </div>
  );
}

////es6 syntax
// const App = () => {
//     return Star();
// }

export default App;
