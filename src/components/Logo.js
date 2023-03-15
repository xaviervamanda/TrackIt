import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo (){
    return (
        <TopLogo>
            <img src={logo} alt="Logo do TrackIt" />
        </TopLogo>
    );
}

const TopLogo = styled.div`
    width: 180px;
    height: 178.38px;
    position: absolute;
    left: 97px;
    top: 68px;
    img{
        width: 180px;
        height: 178.38px;  
    }
`
