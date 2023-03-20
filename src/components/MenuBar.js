import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { buttonsColor, buttonTextColor } from "../constants/colors";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../constants/MyContext";
import { Link } from "react-router-dom";

export default function MenuBar (){
    
    const {userHabits, setDoneHabits, doneHabits} = useContext(MyContext);
    console.log(userHabits)

    useEffect(() => {
        if (userHabits !== null){
            const habitsDone = userHabits.filter((habit) => habit.done);
            console.log(habitsDone);
            const newPercentage = (habitsDone.length * 100)/(userHabits.length);
            console.log(newPercentage);
            setDoneHabits(newPercentage.toFixed(0));
        } else {
            return
        }
        
    }, [userHabits])

    return (
        <Container data-test="menu">
            <StyledLink data-test="habit-link" to={"/habitos"}><Options>Hábitos</Options></StyledLink>
           
            <Link data-test="today-link" to={"/hoje"}><StyledCircularProgressbar 
                value={doneHabits} 
                background 
                backgroundPadding={6}
                styles={
                    buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
            >
                <div style={{ fontSize: 18, marginBottom: 162, fontFamily: 'Lexend Deca', color: '#fff'}}>Hoje</div>
            </StyledCircularProgressbar></Link>
            <StyledLink data-test="history-link" to={"/historico"}><Options>Histórico</Options></StyledLink>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background-color: ${buttonTextColor};
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledCircularProgressbar = styled(CircularProgressbarWithChildren)`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
`
const Options = styled.div`
    width: 79px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${buttonsColor};
    margin-left: 31px;
    margin-right: 31px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`