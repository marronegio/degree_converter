import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #1F1F1F;
        --orange: #FFAA29;
        --dark: #1F1F1F;

        --shape: #FFFFFF
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
       @media (max-width:1080px) {
           font-size: 93.75%;
       } 
       @media (max-width:720) {
           font-size: 87.5%;
       } 
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
        user-select: none;
    }
    p {
        font-size: 16px;
    }
`;
