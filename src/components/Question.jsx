// Question.jsx
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExamsContext from "../context/ExamsContext";
import "./Question.css";
import { useNavigate, useParams } from "react-router-dom";

function Question() {
  const { questionID, examID } = useParams();
  const navigate = useNavigate();
  const {
    questionName,
    questions,
    questionLastIndex,
    nextQuestion,
    currentQuestion,
    setCurrentQuestion,
    setQuestionThis,
    examId,
    questionIndex,
    questionIdArray,
    questionThis,
    selectedAnswer,
    setSelectedAnswer,
  } = useContext(ExamsContext);

  useEffect(() => {
    navigate(`/question/${examId}/${questionIndex}`);
  }, [currentQuestion, examId, questionIndex, navigate]);

  const handleClickNextQuestion = () => {
    if (selectedAnswer === null || selectedAnswer === undefined) {
      console.error("HATA: Bir şık seçilmedi!");
      toast.error("Lütfen bir şık seçin!");
      return;
    }

    if (currentQuestion + 1 < questionIdArray.length) {
      // Sorular henüz bitmediyse
      console.log("Next question");
      nextQuestion();
     setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
      setQuestionThis(true);
    } else if (currentQuestion + 1 === questionIdArray.length) {
      // Sorular bittiyse
      setCurrentQuestion((prev) => prev + 1);
      setQuestionThis(false);
      nextQuestion();
      setSelectedAnswer(null)
      console.log("End of questions");
    } else {
      console.error("HATA: Beklenmeyen durum!");
    }
  };

  return (
    <div className="questionContainer">
      <ToastContainer />
      <h3 className="questionHeader">
        {questionName} {currentQuestion} \ {questionLastIndex}
      </h3>
      <div className="questionSectionContainer">
        <div className="questionLeftSection">
          <div className="questionText">{questions[0].questionText}</div>
          <div className="answerOptions">
            <button
              className="questionOption"
              value={questions[0].answer1}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions[0].answer1}
            </button>
            <button
              className="questionOption"
              value={questions[0].answer2}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions[0].answer2}
            </button>
            <button
              className="questionOption"
              value={questions[0].answer3}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions[0].answer3}
            </button>
            <button
              className="questionOption"
              value={questions[0].answer4}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions[0].answer4}
            </button>
          </div>
        </div>
        <div className="questionRightSection">
          {Array.from({ length: questionLastIndex }, (_, index) => (
            <div key={index} className="square">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      {questionThis ? (
        <button
          className="nextQuestionButton"
          onClick={() => handleClickNextQuestion()}
        >
          Sonraki Soru
        </button>
      ) : (
        <button className="nextQuestionButton">Sinavi Bitir</button>
      )}
    </div>
  );
}

export default Question;
