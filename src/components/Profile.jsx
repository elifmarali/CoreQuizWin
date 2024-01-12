import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Header from "./Header";
import "./Profile.css";

function Profile() {
  const { currentUser, currentUserPointsData } = useContext(AuthContext);
  const [formattedName, setFormattedName] = useState("");
  const [pointsData, setPointsData] = useState({});

  useEffect(() => {
    if (currentUser) {
      const fullName = currentUser.split(" ");
      const firstName = fullName[0];
      const lastName = fullName.slice(1).join(" ");

      const formattedName = `${firstName[0].toUpperCase()}${firstName.slice(
        1
      )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
      setFormattedName(formattedName);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUserPointsData) {
      setPointsData(currentUserPointsData);
    }
  }, [currentUserPointsData]);

  const handleDownloadCertificate = (exam, examScore) => {
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
      ctx.fillText(currentUserText.toUpperCase(), currentUserX - 20, 300);

      const examInfoText = `${exam} : ${examScore}`;
      const examInfoTextWidth = ctx.measureText(examInfoText).width;
      const examInfoX = (canvas.width - examInfoTextWidth) / 2;
      ctx.fillText(examInfoText, examInfoX, 340);

      ctx.font = '17px monotype corsiva';
      ctx.fillStyle = '#021B35';
      const certificateText = `Bu sertifika, başarıyla tamamlanan ${exam} sınavında gösterdiğiniz üstün performans ve çaba için size verilmiştir. Bu\nbaşarı, gösterdiğiniz özveri ve azmin bir göstergesidir. Sizi tebrik eder, gelecekteki başarılarınızda da aynı başarıyı\nsürdürmenizi dileriz.`;
      const certificateTextLines = certificateText.split('\n');

      let lineHeight = 20;
      let textY = 400;
      certificateTextLines.forEach(line => {
        ctx.fillText(line, 140, textY);
        textY += lineHeight;
      });

      const downloadBtn = document.createElement('a');
      downloadBtn.href = canvas.toDataURL('image/jpg');
      downloadBtn.download = `Certificate - ${exam} - ${currentUser}.jpg`;
      downloadBtn.click();

      document.body.removeChild(canvas);
    };

    document.body.appendChild(canvas);
  };

  return (
    <>
      <Header />
      <div className="profileContainer">
        <div className="profile">
          <div className="profileName">
            <div className="profileDesc">Ad - Soyad :</div>
            <div className="profileValue">{formattedName}</div>
          </div>
          {Object.keys(pointsData).length === 0 ? (
            <div className="profileDesc">Henüz herhangi bir sınava girmediniz!</div>
          ) : (
            <div className="examScores">
              <div className="profileDesc">Girilen Sınavlar ve Puanları:</div>
              <ul className="profileValue">
                {Object.entries(pointsData).map(([exam, score]) => (
                  <li key={exam}>
                    {exam}: {score} {score >= 70 && (
                      <a className="profileLink" onClick={() => handleDownloadCertificate(exam, score)}>
                        Sertifikayı İndir
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
