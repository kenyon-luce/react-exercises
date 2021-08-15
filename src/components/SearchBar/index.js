import React, {useState, useEffect, useRef} from 'react';
import searchIcon from '../../images/search-icon.svg';
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');

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