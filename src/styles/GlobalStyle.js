import { createGlobalStyle } from "styled-components"
import { buttonsColor, buttonTextColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`

    button {
        background-color: ${buttonsColor};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${buttonTextColor};
        border: none;
        border-radius: 4.63636px;
    }

    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px; 
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding: 9px;
        margin-bottom: 6px;
        ::placeholder{
            color: #DBDBDB;
        }
    }
`

export default GlobalStyle;