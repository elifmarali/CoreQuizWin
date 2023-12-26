import { useContext } from "react";
import ExamsContext from "../context/ExamsContext";
import "./Question.css"

function Question(){
    const {questionIndex,setQuestionIndex,questions,questionLastIndex}=useContext(ExamsContext);
    console.log(questions);
    return(
        <div className="questionContainer">
            <div>{index}</div>
        </div>
    )
}
export default Question;