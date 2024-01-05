import React from "react";
import "./Result.css"
import { useNavigate, useParams } from "react-router-dom";
function Result(){
    const {userID,examName}=useParams();
    const navigate=useNavigate();
return( 
    <main className="resultMain">
    <section className="resultSection">
        <div className="resultHeader">{examName} Sınavı</div>
        <div className="resultPoint">Puanınız : 40</div>
         {/* // {Tebrikler Sertifikanizi Alt kisimdaki linkten indirebilirsiniz } / {Maalesef baraji gecemediniz} */}
        <a href="resim1.png" download>Sertifika Dosyasını İndir</a>
      <div className="resultButtonContainer">
        <button onClick={()=>{navigate("/")}} className="backHomeButton">
            Ana Sayfaya Geri Dön
        </button>
      </div>
    </section>
  </main>
)
}
export default Result;