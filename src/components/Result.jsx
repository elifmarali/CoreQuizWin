import React, { useContext, useEffect, useState } from "react";
import "./Result.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Result() {
  const { userID, examName } = useParams();
  const { currentUserPointsData, currentUser } = useContext(AuthContext);
  const [examScore, setExamScore] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const score = await currentUserPointsData[examName];
      setExamScore(score);
    };

    fetchData();
  }, [currentUserPointsData, examName]);

  const generateCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 650;
  
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = '/sertifika1.png';
  
    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font = '22px monotype corsiva';
      ctx.fillStyle = '#C9A04B';
  
      const currentUserText = `${currentUser}`;
      const currentUserTextWidth = ctx.measureText(currentUserText).width;
      const currentUserX = (canvas.width - currentUserTextWidth) / 2;
      ctx.fillText(currentUserText.toUpperCase(), currentUserX-20, 300);
  
      const examInfoText = `${examName} : ${examScore}`;
      const examInfoTextWidth = ctx.measureText(examInfoText).width;
      const examInfoX = (canvas.width - examInfoTextWidth) / 2;
      ctx.fillText(examInfoText, examInfoX, 340);
  
      ctx.font = '17px monotype corsiva';
      ctx.fillStyle = '#021B35';
      const certificateText = `Bu sertifika, başarıyla tamamlanan ${examName} sınavında gösterdiğiniz üstün performans ve çaba için size verilmiştir.Bu\nbaşarı, gösterdiğiniz özveri ve azmin bir göstergesidir. Sizi tebrik eder, gelecekteki başarılarınızda da aynı başarıyı\nsürdürmenizi dileriz.`;
      const certificateTextLines = certificateText.split('\n');
      
      let lineHeight = 20;
      let textY = 400;
      certificateTextLines.forEach(line => {
        ctx.fillText(line, 140, textY);
        textY += lineHeight;
      });
  
      const downloadBtn = document.createElement('a');
      downloadBtn.href = canvas.toDataURL('image/jpg');
      downloadBtn.download = 'Certificate - '+ `${examName} - ` + `${currentUser}` + '.jpg';
      downloadBtn.click();
  
      document.body.removeChild(canvas);
      document.body.removeChild(downloadBtn);
    };
  
    document.body.appendChild(canvas);
  };
  

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
                <a onClick={generateCertificate} className="downloadBtn">
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
