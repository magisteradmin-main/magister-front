import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: black;
  }

  input, select, button {
    font-family: inherit;
    font-size: 16px;
  }
`;

export default GlobalStyle;
