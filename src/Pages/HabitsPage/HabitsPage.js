import styled from "styled-components";
import {BsFillPlusSquareFill} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../constants/MyContext";
import { principalTitlesColor, buttonsColor, generalBackgroundColor} from "../../constants/colors";
import TopBar from "../../components/TopBar";
import MenuBar from "../../components/MenuBar";
import AllUserHabits from "../../components/AllUserHabits";
import ContainerAddHabit from "../../components/ContainerAddHabit";
import { ColorRing } from "react-loader-spinner";

export default function HabitsPage ({url}){

    const [addHabit, setAddHabit] = useState(false);
    const {userData, allHabits, setAllHabits} = useContext(MyContext);
    const token = {
        headers: {Authorization: `Bearer ${userData.token}`}
    };

    useEffect(() => {
        axios.get (`${url}habits`, token)
        .then((res) => setAllHabits(res.data))
        .catch((error) => console.log(error.response.data.message))
    }, []);

    if (allHabits === null){
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

    console.log(allHabits)

    return (
        <>
        
        <Container>
            <TopBar />
            <Title>Meus hábitos</Title>
            <PlusIcon data-test="habit-create-btn" onClick={() => {
                setAddHabit(true)
            }}/>
            <ContainerAddHabit setAddHabit={setAddHabit} 
            addHabit={addHabit} url={url} />
            <AllUserHabits addHabit={addHabit} url={url}/>
            <MenuBar />
        </Container>
        
        </>
    );
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background-color: ${generalBackgroundColor};
    position: relative;
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

const PlusIcon = styled(BsFillPlusSquareFill)`
    position: absolute;
    width: 40px;
    height: 35px;
    left: 317px;
    top: 92px;
    color: ${buttonsColor};
`



