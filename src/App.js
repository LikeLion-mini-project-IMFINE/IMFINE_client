import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import NewsPage from "./pages/news/NewsPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";
import NewList from "./pages/news/NewList";
import QuizMain from "./pages/quiz/QuizMain";
import QuizAnswer from "./pages/quiz/QuizAnswer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/quiz/:newsId" element={<QuizMain />} />
      <Route path="/quiz/:newsId/:answer" element={<QuizAnswer />} />
      <Route path="/news/:newsId" element={<NewsDetailPage />} />
      <Route path="/news/list" element={<NewList />} />
    </Routes>
  );
}

export default App;
