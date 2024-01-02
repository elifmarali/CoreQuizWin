import React from "react";
import Header from "./Header";
import "./Hakkimizda.css";
import Footer from "./Footer";

function Hakkimizda() {
  return (
    <div className="aboutContainer">
      <Header />

      <div className="containerAbout">
        <div className="content">
          <h1>Hakkımızda</h1>

          <div className="section">
            <p></p>
            <h2>Misyonumuz ve Vizyonumuz</h2>
            <p>
             &emsp;&ensp;CoreQuiz, interaktif bir sınav platformudur. Kurumlar,
              çalışanlarına özel sınavlar düzenleyebilir ve başarıya ulaşan
              katılımcılara özel olarak hazırlanan sertifikalar sunabilir. .NET
              ve React teknolojileri kullanılarak geliştirilen platformumuz,
              kullanıcı dostu arayüzü ve güvenilir altyapısıyla öne çıkıyor.
            </p>
          </div>

          <div className="section">
            <h2>Ekip</h2>
            <ul className="teamList">
            <li>Doğukan MUSLUKÇU&nbsp; - &nbsp;Back-End</li>
              <li>Berke ÇELİKEL&nbsp; - &nbsp;Back-End</li>
              <li>Mehmet Fatih KARA&nbsp; - &nbsp;Front-End</li>
              <li>Murat Özkan KAYA&nbsp; - &nbsp;Front-End</li>
              <li>Elif MARALI&nbsp; - &nbsp;Front-End</li>
            </ul>
          </div>

          <div className="section">
            <h2>Ekibin Geçmiş Başarılar</h2>
            <p>&emsp;&ensp;"Boodle" planlama projesi</p>
            <p>&emsp;&ensp;Haber Sistemi</p>
          </div>

          <div className="section">
            <h2>İletişim Bilgileri</h2>
            <ul className="contactList">
              <li>Doğukan MUSLUKÇU - 202003011008@dogus.edu.tr</li>
              <li>Berke ÇELİKEL - 202003011027@dogus.edu.tr</li>
              <li>Mehmet Fatih KARA - 202003011048@dogus.edu.tr</li>
              <li>Murat Özkan KAYA - 202003011036@dogus.edu.tr</li>
              <li>Elif MARALI - 202003011021@dogus.edu.tr</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hakkimizda;