import React from 'react';

//importing placeholder elements
//LOGOS
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
//STYLES
import {Wrapper, Content, LogoImg, TMDBLogoImg, CreditLogo} from './Header.styles';
//the "{}" lets us import more than one element from the same component

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            <CreditLogo src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;