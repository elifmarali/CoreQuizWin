import React, { useContext, useEffect, useState } from "react";
import "./Result.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Result() {
  const { userID, examName } = useParams();
  const { currentUserPointsData } = useContext(AuthContext);
  const [examScore, setExamScore] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const score = await currentUserPointsData[examName];
      setExamScore(score);
    };

    fetchData();
  }, [currentUserPointsData, examName]);

  return (
    <main className="resultMain">
      <section className="resultSection">
        <div className="resultHeader">{examName} Sınavı</div>
        {examScore !== undefined ? (
          <div>
            <div className="resultPoint">Puanınız: {examScore}</div>
            {examScore >= 70 ? (
              <div>
                <p>Tebrikler! Başarılı oldunuz.</p>
                <a href="resim1.png" download>
                  Sertifika Dosyasını İndir
                </a>
              </div>
            ) : (
              <p>Maalesef barajı geçemediniz.</p>
            )}
          </div>
        ) : (
          <div className="resultPoint">Puanınız bekleniyor...</div>
        )}
        <div className="resultButtonContainer">
          <button onClick={() => navigate("/")} className="backHomeButton">
            Ana Sayfaya Geri Dön
          </button>
        </div>
      </section>
    </main>
  );
}

export default Result;
