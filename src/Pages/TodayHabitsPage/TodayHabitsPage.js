import { useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MyContext } from "../../constants/MyContext";
import dayjs from "dayjs";
import locale from "dayjs/locale/pt-br";
import TopBar from "../../components/TopBar";
import MenuBar from "../../components/MenuBar";


export default function TodayHabitsPage ({url}){

    const today = dayjs().locale('pt-br');
    const date = today.format('DD/MM');
    console.log(date);
    const weekDay = today.format('dddd');
    console.log(weekDay);

    const {userData, setUserHabits} = useContext(MyContext);

    const body = {
        headers: {Authorization: `Bearer ${userData.token}`}
    };

    useEffect(() => {
        axios.get(`${url}/habits/today`, body)
        .then(res => setUserHabits(res.data))
        .catch(error => console.log(error.response.data.message))
    }, []);

    return (
        <>
        <TopBar />
        <div>Página de hábitos de hoje</div>
        <MenuBar />
        </>
    );
}