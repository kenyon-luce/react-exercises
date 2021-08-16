import React, {useState, useEffect, useRef} from 'react';
import searchIcon from '../../images/search-icon.svg';
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) { // .current represents the current value of the variable, since it is set true at first it will pass this conditioin and change its value to false
            initial.current = false;
            return;
        }
        //^skips initial render

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer) //stops timer after running, just so it doesn't run forever
    }, [setSearchTerm, state])
    //this is a timer that will run our search function 500 milliseconds after typing the search query (search term and state)

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input type="text" placeholder='Search Movie' onChange={event => setState(event.currentTarget.value)} value={state}/>
            {/*    the inline function within the onChange attribute allows us to constantly update the state value with our current value as we type*/}
            </Content>
        </Wrapper>
    );
};

//this is a CONTROLLED COMPONENT

export default SearchBar;