import { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../constants/MyContext";
import { initialBackgroundColor, textsColor } from "../constants/colors";
import {BsFillCheckSquareFill} from "react-icons/bs"
import axios from "axios";

export default function ContainerHabit ({url}){

    const {userHabits, userData, setUserHabits} = useContext(MyContext);

    function record (hab){
        if (hab.currentSequence === hab.highestSequence){
            if(hab.currentSequence !== 0){
               return true 
            }
            return false
            
        } else {
            return false
        }
    } 
    
    function handleHabit (id, done){
        const token = {
            headers: {Authorization: `Bearer ${userData.token}`}
        };
        if (done){
            axios.post (`${url}habits/${id}/uncheck`, {}, token)
            .then(() => {
                axios.get(`${url}/habits/today`, token)
                .then(res => setUserHabits(res.data))
                .catch(error => console.log(error.response.data.message))
            })
            .catch(error => alert(error.response.data.message))
        } else {
            axios.post (`${url}habits/${id}/check`, {}, token)
            .then(() => {
                axios.get(`${url}/habits/today`, token)
                .then(res => setUserHabits(res.data))
                .catch(error => console.log(error.response.data.message))
            })
            .catch(error => alert(error.response.data.message))
        }
        

    }


    return (
        
        <Container>
            {userHabits.map ((habit) => (   
                <Habit  data-test="today-habit-container" key={habit.id} record={() => record (habit)}>
                    <h1 data-test="today-habit-name">{habit.name}</h1>
                    <div>
                        <h2 data-test="today-habit-sequence">Sequência atual: <span>{habit.currentSequence} dias</span></h2>
                        <h2 data-test="today-habit-record">Seu recorde: <span>{habit.highestSequence} dias</span></h2>
                    </div>
                    <Icon data-test="today-habit-check-btn" 
                    onClick={() => handleHabit(habit.id, habit.done)} done={habit.done}/>
                </Habit> 
            ))}
        </Container>
        
    );
}

const Container = styled.div`
    width: 340px;
    height: 404px;
    position: absolute;
    top:177px;
    left:18px;
    overflow-y: scroll;
`
const Habit = styled.div`
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    background-color: ${initialBackgroundColor};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: ${textsColor};
    position: relative;
    h1{
        font-size: 19.976px;
        line-height: 25px;
        position: absolute;
        top:13px;
        left: 15px;
    }
    div {
        font-size: 12.976px;
        line-height: 16px;
        position: absolute;
        top: 45px;
        left: 15px;
    }
    span {
        color: ${props => props.record ? '#8FC549' : `${textsColor}`}
    }
`
const Icon = styled(BsFillCheckSquareFill)`
    width: 69px;
    height: 69px;
    color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
    position: absolute;
    top:13px;
    left:258px;
`