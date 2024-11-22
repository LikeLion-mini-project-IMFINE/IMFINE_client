import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import QuizMain from "./pages/quiz/QuizMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<QuizMain />} />
    </Routes>
  );
}

export default App;
