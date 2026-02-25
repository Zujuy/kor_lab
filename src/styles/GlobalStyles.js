import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    
  }
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
`;