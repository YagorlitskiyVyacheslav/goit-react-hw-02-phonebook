import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

h2 {
  margin: 20px 0;
  font-size: 24px;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
}
li {
    list-style-type: none;
}
`;

export default GlobalStyled;