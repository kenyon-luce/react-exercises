import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
   
   h1 {
      color: var(--medGrey);
      
      @media screen and (max-width: 768px) {
         font-size: var(--fontBig); 
      }
   }
`;

export const Content = styled.div`
    display: grid;
    //fragments?
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //each column is 200px and it fits as many columns as it can depending on the page width
    grid-gap: 2rem;
`;