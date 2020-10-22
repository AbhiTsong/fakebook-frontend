import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* display: flex; */
  justify-content: center;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::-webkit-scrollbar{
    width: 0;
   }
}

a {
  text-decoration: none;
  color: rgb(32, 31, 31);
}

input:focus {
  outline-color: transparent;
}
  
`;

export { GlobalStyle };
