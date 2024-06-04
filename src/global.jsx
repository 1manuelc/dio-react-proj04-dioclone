import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    box-sizing: border-box;
    background-color: #1E192C;
    font-family: 'Open Sans', sans-serif;
  }
  
  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    
    list-style: none;
    border: 0;
    outline: 0;
    font-size: 1.6rem;
  }
`;
