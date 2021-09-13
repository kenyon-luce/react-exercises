import React from 'react';
import styled from 'styled-components'

//Components
// import Board from "./components/Board"
// import {Square} from "./components/Square";

// const Square = styled.div`
// display: grid;
//         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //each column is 200px and it fits as many columns as it can depending on the page width
//         grid-gap: 2rem;
//         background: #fff;
//         border: 1px solid #999;
//         float: left;
//         font-size: 24px;
//         font-weight: bold;
//         line-height: 34px;
//         height: 34px;
//         margin-right: -1px;
//         margin-top: -1px;
//         padding: 0;
//         text-align: center;
//         width: 34px;
// `;

const Grid = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 20px;
`;

const Square = styled.div`
// background: #fff;
        border: 1px solid #999;
//         // float: left;
//         font-size: 24px;
//         font-weight: bold;
//         line-height: 34px;
//         height: 34px;
//         // margin-right: -1px;
//         // margin-top: -1px;
//         padding: 0;
//         // text-align: center;
//         width: 34px;
    display: grid;
    //fragments?
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //each column is 200px and it fits as many columns as it can depending on the page width
    grid-gap: 2rem;
`;

const Board = () => (
  <Grid>
    <Square/>
  </Grid>
)


function App() {
  return (
    <>
      <div className="App">
        Start here.
      </div>
      {/* <Square/> */}
      <Board/>
    </>
  );
}

export default App;