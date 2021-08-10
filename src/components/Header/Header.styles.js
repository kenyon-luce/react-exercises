//setting up placeholder elements
import styled from 'styled-components';

//creating space for content
export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 30px;
`;

//organized content within the wrapper
export const Content = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    max-width: ver(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

//QUESTION: where does it know what image is what for the below instances?
export const LogoImg = styled.img`
    width: 200px;
    
    // responsive design
    @media screen and (max-width: 500px) {
        width 150px;
    }
`;
export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;