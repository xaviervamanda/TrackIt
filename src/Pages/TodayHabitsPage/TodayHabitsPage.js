import { useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MyContext } from "../../constants/MyContext";

export default function TodayHabitsPage ({url}){

    const {userData} = useContext(MyContext);

    const body = {
        headers: {Authorization: `Bearer ${userData.token}`}
    };

    useEffect(() => {
        axios.get(`${url}/habits/today`, body)
        .then(res => console.log(res.data))
        .catch(error => console.log(error.response.data.message))
    }, []);

    return (
        <>
        <div>Página de hábitos de hoje</div>
        </>
    );
}