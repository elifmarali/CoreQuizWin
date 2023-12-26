// App.js
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Certificate from "./components/Certificate";
import Hakkimizda from "./components/Hakkimizda";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ExamsPage from "./components/ExamsPage";
import Question from "./components/Question";
import QuestionInfo from "./components/QuestionInfo";
import { useContext } from "react";
import ExamsContext from "./context/ExamsContext";

function App() {
  const { examId, questionId } = useContext(ExamsContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/examsPage" element={<ExamsPage />} />
        <Route path="/about" element={<Hakkimizda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question/:examId/:questionId" element={<Question />} />
        <Route path="/questionInfo" element={<QuestionInfo />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
