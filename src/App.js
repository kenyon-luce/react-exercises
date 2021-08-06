import React, {useState} from 'react';
import styled from 'styled-components'
import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";

//Components
const Star = () => React.createElement('div', null, 'This is a little star');

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
    const [isLampOn, setIsLampOn] = useState(false) //set off by default
    const lightSwitch = () => setIsLampOn(prev => !prev); //switches the boolean value to true once activated and vice versa

    return (
        //the below tags are being used similar to classes in Java
        <Room>
            {/*the below attributes are called props, which control the properties of that tag*/}
            <Lamp lampOn={isLampOn} position='left'/>
            <LightSwitch
                name='one'
                callback={lightSwitch}
                switchOn={isLampOn}
                position='left'
            />
        </Room>
    )
}

export default App;
