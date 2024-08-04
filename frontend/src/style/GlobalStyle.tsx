import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3 {
        font-weight: bold;
    }

    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 18px;
    }
`