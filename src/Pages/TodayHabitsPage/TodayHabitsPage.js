import { useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MyContext } from "../../constants/MyContext";
import dayjs from "dayjs";
import locale from "dayjs/locale/pt-br";
import TopBar from "../../components/TopBar";
import MenuBar from "../../components/MenuBar";
import { generalBackgroundColor, principalTitlesColor } from "../../constants/colors";
import ContainerHabit from "../../components/ContainerHabit";
import { ColorRing } from "react-loader-spinner";


export default function TodayHabitsPage ({url}){

    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const today = dayjs().locale('pt-br');
    const date = today.format('DD/MM');
    console.log(date);
    const weekDay = today.format('d');
    console.log(weekDay);

    const {userData, setUserHabits, userHabits, doneHabits} = useContext(MyContext);

    const token = {
        headers: {Authorization: `Bearer ${userData.token}`}
    };

    useEffect(() => {
        axios.get(`${url}/habits/today`, token)
        .then(res => setUserHabits(res.data))
        .catch(error => console.log(error.response.data.message))
    }, []);

    console.log(userHabits)
    console.log(doneHabits)

    if (userHabits === null){
        return <>
        <TopBar />
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        <MenuBar/>
      </>
    }

    return (
        <Container>
            <TopBar />
            <Date data-test="today">{weekDays[weekDay]}, {date}</Date>

            <SubTitle data-test="today-counter" userHabits={userHabits.length} doneHabits={doneHabits}>
                {(userHabits.length === 0 || doneHabits === 0) ? (
                    "Nenhum hábito concluído ainda"
                ) : (
                    `${doneHabits}% dos hábitos concluídos`
                )}
            </SubTitle>
            
            <ContainerHabit url={url}/>
            <MenuBar />
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background-color: ${generalBackgroundColor};
    position: relative;
`
const Date = styled.div`
    position: absolute;
    width: 280px;
    height: 29px;
    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${principalTitlesColor};
`
const SubTitle = styled.div`
    position: absolute;
    width: 278px;
    height: 22px;
    left: 17px;
    top: 127px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 28px;
    color: ${props => (props.userHabits === 0 || props.doneHabits === 0) ? '#BABABA' : '#8FC549'};
`