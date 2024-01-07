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
          <h1 className="aboutHeader">Hakkımızda</h1>

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
            <h2 className="aboutHead">Ekip</h2>
            <ul className="teamList">
              <li className="contactListItem">Doğukan MUSLUKÇU&nbsp; - &nbsp;Back-End</li>
              <li className="contactListItem">Berke ÇELİKEL&nbsp; - &nbsp;Back-End</li>
              <li className="contactListItem">Mehmet Fatih KARA&nbsp; - &nbsp;Front-End</li>
              <li className="contactListItem">Murat Özkan KAYA&nbsp; - &nbsp;Front-End</li>
              <li className="contactListItem">Elif MARALI&nbsp; - &nbsp;Front-End</li>
            </ul>
          </div>

          <div className="section">
            <h2 className="aboutHead">Ekibin Geçmiş Başarılar</h2>
            <p>&emsp;&ensp;"Boodle" planlama projesi</p>
            <p>&emsp;&ensp;Haber Sistemi</p>
            <p>&emsp;&ensp;CoreMarket</p>
            <p>&emsp;&ensp;YSoftHR System</p>
          </div>
                    
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hakkimizda;