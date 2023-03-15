import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./Pages/HabitsPage/HabitsPage";
import HistoricPage from "./Pages/HistoricPage/HistoricPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import TodayHabitsPage from "./Pages/TodayHabitsPage/TodayHabitsPage";

export default function App() {

  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage url={url}/>}/>
        <Route path="/cadastro" element={<RegisterPage url={url}/>}/>
        <Route path="/habitos" element={<HabitsPage url={url}/>}/>
        <Route path="/hoje" element={<TodayHabitsPage url={url}/>}/>
        <Route path="/historico" element={<HistoricPage url={url}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

