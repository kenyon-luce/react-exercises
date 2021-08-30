import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper, Content} from "./BreadCrumb.styles";

//A breadcrumb is information that is displayed based on its url location, if we are viewing movie profiles, we want a specific banner to display
const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>

        {/*    should return [Home | (movieTitle)] and Home should redirect to homepage when clicked*/}
        </Content>
    </Wrapper>
);

export default BreadCrumb;