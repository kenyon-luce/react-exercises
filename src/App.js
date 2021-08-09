import React, {useState} from 'react';
import styled from 'styled-components'
import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";

//Components
// const Star = () => React.createElement('div', null, 'This is a little star');

const Room = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    border: 10px solid black;
    margin: 0 auto; 
`;
//the "`" symbol is necessary to contain the CSS properties of the styled div

// function App() {
//   return (
//     <div className="App">
//       Start here.
//     </div>
//   );
// }

const App = () => {
    // return Star();
    const [isLampOn1, setIsLampOn1] = useState(false) //set off by default
    const [isLampOn2, setIsLampOn2] = useState(true) //set off by default
    const lightSwitch1 = () => setIsLampOn1(prev => !prev); //switches the boolean value to true once activated and vice versa
    const lightSwitch2 = () => setIsLampOn2(prev => !prev);
    //applying this for each individual lamp
    return (
        //the below tags are being used similar to classes in Java
        <Room>
            {/*the below attributes are called props, which control the properties of that tag*/}
            <Lamp lampOn={isLampOn1} position='left'/>
            <Lamp lampOn={isLampOn2} position='right'/>
            <LightSwitch
                name='one'
                callback={lightSwitch1}
                switchOn={isLampOn1}
                position='left'
            />
            <LightSwitch
                name='two'
                callback={lightSwitch2}
                switchOn={isLampOn2}
                position='right'
            />
        </Room>
    )
}

export default App;
