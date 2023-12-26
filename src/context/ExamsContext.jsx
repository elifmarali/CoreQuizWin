import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
// Context oluştur
const ExamsContext = createContext();

// Provider bileşeni oluştur
export const ExamsProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const EXAMS_API_URL = "https://localhost:44309/api/exams/";
  const QUESTION_API_URL = "https://localhost:44309/api/question/";
  const [allExams, setAllExams] = useState(); //tum sinavlarin listesi 
  const [questions, setQuestions] = useState(); // secilen sinavin ilk sorusu 
  const [questionName,setQuestionName]=useState(); // secilen sinavin adi
  const[examId,setExamId]=useState(); //secilen sinavin id si
  const [questionIndex, setQuestionIndex] = useState(); // secilen sinavin ilk sorusunun id si
  const [questionLastIndex,setQuestionLastIndex]=useState(); // secilen sinavin icinde kac soru bulundugu
  useEffect(() => {
    const fetchExamNames = async () => {
      try {
        const response = await axios.get(EXAMS_API_URL + "getAllExams");
        setAllExams(response.data.data);
      } catch (err) {
        console.log(err);
        console.log(err.message);
      }
    };
    fetchExamNames();
  }, []);
  const clickExam = async (id) => {
    if (currentUser) {
      setExamId(id);
      try {
        const indexResponse = await axios.get(
          EXAMS_API_URL + `getExamDetailsById?Id=${id}`
        );
        const newIndex = indexResponse.data.data[0].questions[0].id;
        setQuestionIndex(newIndex);
        setQuestionLastIndex(indexResponse.data.data.length);
        setQuestionName(indexResponse.data.data[0].examName);
        const response = await axios.get(
          QUESTION_API_URL +
            `getQuestionDetailsByExamId?examId=${id}&questionId=${newIndex}`
        );
        setQuestions(response.data.data);
      } catch (err) {
        console.log("Sınav detayları getirilemedi", err);
      }
    }
  };

  const sharedValuesAndMethods = {
    allExams,
    clickExam,
setQuestionIndex,
questionIndex,
    questions,
    questionLastIndex,
    questionName,
    examId,
  };
  return (
    <ExamsContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ExamsContext.Provider>
  );
};

export default ExamsContext;
