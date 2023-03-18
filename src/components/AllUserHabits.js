import styled from "styled-components";
import {GoTrashcan} from "react-icons/go";
import { buttonTextColor, textsColor } from "../constants/colors";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../constants/MyContext";

export default function AllUserHabits ({url, addHabit}){

    const {userData, allHabits, setAllHabits} = useContext(MyContext);

    function deleteHabit (id){
        if (window.confirm("Você gostaria realmente de apagar esse hábito?")){
            const token = {
            headers: {Authorization: `Bearer ${userData.token}`}
            };
            axios.delete (`${url}habits/${id}`, token)
            .then((res) => setAllHabits(allHabits.filter((habit) => habit.id !== id)))
            .catch(error => console.log(error.response.data.message))  
        }else {
            return
        }  
    }

    return (
        <Container addHabit={addHabit}>
            {allHabits.length !== 0 ? (
                allHabits.map ((habit) => (
                    <ContainerHabit key={habit.id} data-test="habit-container">
                        <HabitName data-test="habit-name">{habit.name}</HabitName>
                        <DivButtons>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(0)}>D</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(1)}>S</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(2)}>T</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(3)}>Q</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(4)}>Q</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(5)}>S</DayButton>
                            <DayButton data-test="habit-day" disabled colorBtn={habit.days.includes(6)}>S</DayButton>
                        </DivButtons>
                        <TrashIcon data-test="habit-delete-btn" onClick={() => deleteHabit(habit.id)}/>
                    </ContainerHabit>
            ))): (
               <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits> 
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    height: 404px;
    position: absolute;
    left: 17px;
    top: 147px;
    overflow-y: scroll;
    display: ${props => props.addHabit ? "none" : "initial"};
`
const HabitName = styled.div`
    position: absolute;
    width: 280px;
    height: 25px;
    left: 15px;
    top: 13px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${textsColor};
`

const ContainerHabit = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    position: relative;
    background-color: ${buttonTextColor};
    margin-bottom: 10px;
`
const DivButtons = styled.div`
    width: 234px;
    display: flex;
    position: absolute;
    top:48px;
    left:19px;
`

const TrashIcon = styled(GoTrashcan)`
    width: 20px;
    height: 20px;
    position: absolute;
    top:11px;
    left: 310px;
`
const DayButton = styled.button`
    background-color: ${props => props.colorBtn ? '#CFCFCF' : `${buttonTextColor}`};
    width: 30px;
    height: 30px;
    color: #DBDBDB;
    border: 1px solid #D5D5D5;
    margin-right: 4px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
`

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