import { createGlobalStyle } from "styled-components"
import { buttonsColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`

    button {
        background-color: ${buttonsColor};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        text-align: center;
    }

    input {
        width: 303px;
        height: 45px; 
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

export default GlobalStyle;