import React, {useState} from 'react';
import styled from 'styled-components'

//Components
const Star = () => React.createElement('div', null, 'This is a little star');

//the "`" symbol is necessary to contain the CSS properties of the styled div

const App = () => {
    return Star();
}

export default App;
