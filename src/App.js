import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import NewsPage from "./pages/news/NewsPage";
import QuizMain from "./pages/quiz/QuizMain";
import QuizAnswer from "./pages/quiz/QuizAnswer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/quiz" element={<QuizMain />} />
      <Route path="/quiz/:answer" element={<QuizAnswer />} />
    </Routes>
  );
}

export default App;
