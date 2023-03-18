import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { textsColor, buttonTextColor, initialBackgroundColor, buttonsColor } from "../constants/colors";
import { MyContext } from "../constants/MyContext";
import { ThreeDots } from "react-loader-spinner";


export default function ContainerAddHabit ({addHabit, url, setAddHabit}){

    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);
    const {userData, allHabits, setAllHabits} = useContext(MyContext);
    const [disabled, setDisabled] = useState(false);

    function handleDayButton (buttonNumber){
        if (habitDays.includes(buttonNumber)){
            const newHabitDays = [...habitDays];
            const index = habitDays.indexOf(buttonNumber);
            newHabitDays.splice(index, 1);
            setHabitDays(newHabitDays);
        } else {
            setHabitDays([...habitDays, buttonNumber]);
        }
    }

    function saveHabit (e){
        e.preventDefault();
        setDisabled(true);
        const token = {
            headers: {Authorization: `Bearer ${userData.token}`}
            };
        const body = {name: habitName, days: habitDays};
        console.log(body)
        axios.post (`${url}habits`, body, token)
        .then(res => {
            console.log(res.data);
            setDisabled(false);
            setHabitName("");
            setHabitDays([]);
            setAddHabit(false);
            axios.get (`${url}habits`, token)
            .then((res) => setAllHabits(res.data))
            .catch((error) => console.log(error.response.data.message))
        })
        .catch(error => {
            window.alert(error.response.data.message);
            setDisabled(false);
        })
    }

    function cancelHabit (){
        setAddHabit(false);
    }

    return (
        <>
            <Container data-test="habit-create-container" onSubmit={(e) => saveHabit(e)} addHabit={addHabit}>
                <input data-test="habit-name-input"
                type="text" 
                placeholder="nome do hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                disabled={disabled}
                />
                <DivButtons>
                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(0)} 
                    colorBtn={habitDays.includes(0)}
                    disabled={disabled}>D</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(1)}
                    colorBtn={habitDays.includes(1)}
                    disabled={disabled}>S</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(2)}
                    colorBtn={habitDays.includes(2)}
                    disabled={disabled}>T</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(3)}
                    colorBtn={habitDays.includes(3)}
                    disabled={disabled}>Q</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(4)}
                    colorBtn={habitDays.includes(4)}
                    disabled={disabled}>Q</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(5)}
                    colorBtn={habitDays.includes(5)}
                    disabled={disabled}>S</DayButton>

                    <DayButton data-test="habit-day"
                    type="button" 
                    onClick={() => handleDayButton(6)}
                    colorBtn={habitDays.includes(6)}
                    disabled={disabled}>S</DayButton>

                </DivButtons>
                <Buttons>
                    <CancelButton data-test="habit-create-cancel-btn" type="button" 
                    onClick={cancelHabit} disabled={disabled}>Cancelar</CancelButton>
                    <SaveButton data-test="habit-create-save-btn">
                        {disabled ? (
                            <ThreeDots 
                            color="#FFF"
                            height={13}
                            width={51}
                            />
                        ) : (
                            "Salvar"
                        )}
                    </SaveButton>
                </Buttons>
            </Container>
            {allHabits.length === 0 ? ( 
                <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
            ) : (
                ""
            )} 
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
const Container = styled.form`
    box-sizing: border-box;
    padding: 19px;
    width: 340px;
    height: 180px;
    position: absolute;
    left: 17px;
    top: 147px;
    background-color: ${initialBackgroundColor};
    display: ${props => props.addHabit ? "initial" : "none"};
`
const DivButtons = styled.div`
    width: 234px;
    display: flex;
    position: absolute;
    top:78px;
    left:19px;
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
const Buttons = styled.div`
    width: 178px;
    height: 35px;
    display: flex;
    position: absolute;
    top: 120px;
    right: 19px;
`
const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    margin-right: 10px;
    background-color: ${initialBackgroundColor};
    color: ${buttonsColor};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
`