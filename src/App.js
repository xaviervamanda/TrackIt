import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./Pages/HabitsPage/HabitsPage";
import HistoricPage from "./Pages/HistoricPage/HistoricPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import TodayHabitsPage from "./Pages/TodayHabitsPage/TodayHabitsPage";
import { MyContext } from "./constants/MyContext";

export default function App() {

  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";
  const [userData, setUserData] = useState(null);
  const [userHabits, setUserHabits] = useState(null);
  const [doneHabits, setDoneHabits] = useState(0);
  const [allHabits, setAllHabits] = useState(null);
  const contextValue = {userData: userData, 
    setUserData: setUserData, userHabits: userHabits, 
    setUserHabits: setUserHabits, doneHabits: doneHabits, 
    setDoneHabits: setDoneHabits, allHabits: allHabits,
    setAllHabits: setAllHabits}

  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage url={url}/>}/>
          <Route path="/cadastro" element={<RegisterPage url={url}/>}/>
          <Route path="/habitos" element={<HabitsPage url={url}/>}/>
          <Route path="/hoje" element={<TodayHabitsPage url={url} />}/>
          <Route path="/historico" element={<HistoricPage url={url}/>}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

