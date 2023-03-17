import styled from "styled-components";
import { textsColor } from "../constants/colors";

export default function ContainerAddHabit (){

    function saveHabit (){
        alert ("falta salvar o hábito")
        // mandar requisição pra salvar o hábito
    }

    return (
        <>
            <Container onSubmit={saveHabit}>
                <input type="text" placeholder="nome do hábito"/>
                <DayButton type="button">D</DayButton>
                <DayButton type="button">S</DayButton>
                <DayButton type="button">T</DayButton>
                <DayButton type="button">Q</DayButton>
                <DayButton type="button">Q</DayButton>
                <DayButton type="button">S</DayButton>
                <DayButton type="button">S</DayButton>
                <CancelButton type="button">Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            </Container>
            <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
        </>
    );
}

const NoHabits = styled.div`
    margin-top: 8px;
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${textsColor};
`
const Container = styled.form``

const DayButton = styled.button``

const CancelButton = styled.button``

const SaveButton = styled.button``