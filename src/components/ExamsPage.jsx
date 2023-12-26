import { useContext } from "react";
import Header from "./Header";
import ExamsContext from "../context/ExamsContext";
import "./ExamsPage.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function ExamsPage() {
  const navigate=useNavigate();
  const { allExams, clickExam } = useContext(ExamsContext);
  const {currentUser}=useContext(AuthContext);
  const handleClickExam =(examId) =>{
    if(currentUser){
      clickExam(examId)
      navigate("/questionInfo");
    }
    else(
navigate("/login")
    )
  }
  return (
    <div className="examsContainer">
      <Header />
      {allExams !== undefined ? (
        allExams.map((exam) => {
          return (
            <button
              className="exam"
              key={exam.id}
              onClick={()=>{handleClickExam(exam.id)}}
            >
              {exam.examName}{" "}
            </button>
          );
        })
      ) : (
        <div>Yükleniyor...</div>
      )}
    </div>
  );
}

export default ExamsPage;
