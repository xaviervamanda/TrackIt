import styled from "styled-components";
import MenuBar from "../../components/MenuBar";
import TopBar from "../../components/TopBar";
import { generalBackgroundColor, principalTitlesColor, textsColor } from "../../constants/colors";

export default function HistoricPage (){
    return (
        <Container >
            <TopBar />
            <Title>Histórico</Title>
            <Soon>Em breve você poderá ver o histórico dos seus hábitos aqui!</Soon>
            <MenuBar />
        </Container>
    );
}

const Container =  styled.div`
    width: 375px;
    height: 667px;
    position: relative;
    background-color: ${generalBackgroundColor};
`

const Title = styled.div`
    color: ${principalTitlesColor};
    position: absolute;
    width: 148px;
    height: 29px;
    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`
const Soon = styled.div`
    position: absolute;
    left: 17px;
    top: 147px;
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${textsColor};
`