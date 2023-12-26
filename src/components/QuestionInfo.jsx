import { useContext } from "react";
import Header from "./Header";
import ExamsContext from "../context/ExamsContext";
import "./QuestionInfo.css"
import { useNavigate } from "react-router-dom";
function QuestionInfo(){
    const navigate=useNavigate();
    const {questionName,examId,questionIndex}=useContext(ExamsContext);
    console.log(questionName,examId,questionIndex);
    return(
        <div className="questionInfoContainer">
            <Header/>
            <div className="main">
                <h1 className="head">{questionName} Testi</h1>
                <div className="section">
                    <div className="leftSection">
                        <h2 className="leftSectionHeader">40 Dakikada Kendini Test Et!</h2>
                    </div>
                    <span className="cizgi"></span>
                    <div className="rightSection">
                        <nav>
                            <ul>
                                <h4 className="rightSectionItem">Tamamen Ücretsiz</h4>
                                <h4 className="rightSectionItem">{questionName} Alanında Kendini Test Et!</h4>
                                <h4 className="rightSectionItem">Eğer Başarılı Olursan Sertifika Kazan!</h4>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className="questionInfoButton" onClick={()=>{navigate(`question/:${examId}/:${questionIndex}`)}}>Sınava Başla</button>
            </div>
        </div>
    )
}
export default QuestionInfo;