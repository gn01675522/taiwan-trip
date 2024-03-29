import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
            display: none;
          }
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
  
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
  
    a {
        text-decoration: none;
    }
  
    ul,
    li {
        list-style-type: none;
    }
  
`;
