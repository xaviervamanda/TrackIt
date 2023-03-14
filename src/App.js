import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./Pages/HabitsPage/HabitsPage";
import HistoricPage from "./Pages/HistoricPage/HistoricPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import TodayHabitsPage from "./Pages/TodayHabitsPage/TodayHabitsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<RegisterPage />}/>
        <Route path="/habitos" element={<HabitsPage />}/>
        <Route path="/hoje" element={<TodayHabitsPage />}/>
        <Route path="/historico" element={<HistoricPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

