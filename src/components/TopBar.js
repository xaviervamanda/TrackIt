import { useContext } from "react";
import styled from "styled-components";
import { topBarColor, buttonTextColor } from "../constants/colors";
import { MyContext } from "../constants/MyContext";

export default function TopBar (){

    const {userData} = useContext(MyContext);
    const userImage = userData.image;

    return (
        <Container data-test="header">
            <h1>TrackIt</h1>
            <UserImage image={userImage}>
                <img src={userData.image} alt="foto de perfil" />
            </UserImage>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background-color: ${topBarColor};
    position: fixed;
    left: 0px;
    top: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: ${buttonTextColor};
        margin-left: 18px;
    }
`
const UserImage = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 28px;
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`