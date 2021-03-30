import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8a05be;
    --purple2: rgb(83, 0, 130);
    --light-purple:rgb(243, 230, 248);
    --white: #ffff;
    --text: rgba(17, 17, 17, 0.7);
    --text2: rgb(25, 25, 25);
    --text3: rgba(17, 17, 17);
    --hover: rgb(213, 125, 255);
    --error: #d72923;
    --success:#1f7f45;
  }

  * { 
    -webkit-font-smoothing: antialiased;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @media (max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button, select {
    font: 600 1rem 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style:none;
    margin:0;
    padding:0;
  }
`;
 
export default GlobalStyle;