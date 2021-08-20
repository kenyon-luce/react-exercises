import Header from './components/Header';
import Home from './components/Home';

//Styling
import {GlobalStyle} from './GlobalStyle'
//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router'

const App = () = (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <GlobalStyle/>
    </Router>
);

export default App;
