import { useState, useEffect, useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authServices";
import ExamsContext from "../context/ExamsContext";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser,currentUserId,setCurrentUserId} = useContext(AuthContext);
  const { allExams, clickExam } = useContext(ExamsContext);

  useEffect(() => {
    const username = AuthService.getUsernameFromToken();
    setCurrentUser(username);
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setCurrentUserId(null)
  };

  const handleClickExam = (examId) => {
    if (currentUser) {
      clickExam(examId);
      navigate("/questionInfo");
    } else navigate("/login");
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        CoreQuiz
      </div>
      <div className="nav-list">
        <ul>
          <li className="nav-item">
            <button onClick={() => navigate("/examsPage")} className="nav-link">
              Sınavlar
            </button>
            <div className="submenu">
              <ul>
                {allExams !== null && allExams !== undefined ? (
                  allExams.map((exam) => {
                    return (
                      <li key={exam.id}>
                        <a
                          href="#"
                          key={exam.id}
                          onClick={() => {
                            handleClickExam(exam.id);
                          }}
                        >
                          {exam.examName}
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <div>Yükleniyor...</div>
                )}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigate("/certificates")}
              className="nav-link"
            >
              Sertifikalar
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate("/about")} className="nav-link">
              Hakkımızda
            </button>
          </li>
        </ul>
      </div>
      <div className="headerButtonsContainer">
        {currentUser ? (
          <div className="userOptions">
            <button className="logOutButton" onClick={handleLogout}>
              Çıkış Yap
            </button>
            <span className="userOptionsFullName">Merhaba, {currentUser}!</span>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="nav-button"
            >
              Kayıt Ol
            </button>
            <button onClick={() => navigate("/login")} className="nav-button">
              Giriş Yap
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
