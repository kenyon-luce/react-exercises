import React from 'react';
import {Link} from 'react-router-dom';

//importing placeholder elements
//LOGOS
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
//STYLES
import {Wrapper, Content, LogoImg, CreditLogo} from './Header.styles';
//the "{}" lets us import more than one element from the same component

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            {/*^^the above logo now works as a link when clicked*/}
            <CreditLogo src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;