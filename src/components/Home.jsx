import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import image from "../images/CoreQuizİleSeviyeniKanıtla.png"
import freeSvg from '../svg/free-svgrepo-com.svg';
import fastSvg from '../svg/fast-svgrepo-com.svg';
import certificateSvg from '../svg/certificate-svgrepo-com.svg';
import categorySvg from '../svg/category-svgrepo-com.svg';
import simpleSvg from '../svg/simple-like-hand-line-drawing-svgrepo-com.svg';
import safetySvg from '../svg/safety-supervision-svgrepo-com.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
import AuthServices from '../services/authServices.jsx';

function Home() {
  const navigate=useNavigate();
  const { currentUserPointsData } = useContext(AuthContext);

useEffect(()=>{
AOS.init({duration:"700"})
},[])


console.log(currentUserPointsData);
  return (
    <div className="HomeContainer">
<div className="topSectionHome">
<Header />
      <div className="homeContainer">
        <div className="home">
          <div className="content">
            <h2 className="contentHead">
              40 dakikada farklı kategorilerde sertifikalar elde edebilirsiniz!
            </h2>
            <h6 className="contentDescription">
              CoreQuiz, hızlı ve etkili bir şekilde kendinizi değerlendirmenize
              olanak tanıyan bir online test platformudur.Sitemizdeki testler,
              farklı alanlardaki yeterlilikleri ölçmek üzere tasarlanmıştır.
              Sertifikalarınız, iş başvurularında ve kariyerinizde sizin için
              önemli bir avantaj sağlar. CoreQuiz, kullanıcılarına hızlı ve
              güvenilir bir şekilde bilgi düzeylerini belgeleme imkanı sunar.
              Hemen şimdi CoreQuiz'e üye olun, konulara özel testleri çözerek
              kendinizi geliştirin ve başarıyı yakalayın.{" "}
              <b className="contentDescriptionBold">
                Unutmayın, başarıya giden yolda CoreQuiz yanınızda!
              </b>
            </h6>
          </div>
          <div className="contentRightSection">
            <img src={image} alt="" className="contentImage" />
          </div>
        </div>
      </div>
</div>
      <div className="main" >
        <div className="featureHeader">
          Neden CoreQuiz'i Tercih Etmelisiniz?
        </div>
        <div className="featureContainer" data-aos="fade-up-left">
          <div className="featureCard" >
            <div className="featureCardSvg">
              <img src={freeSvg} alt="" width={60} height={60} />
            </div>
            <div className="featureCardHeader">Ücretsiz Kullanım</div>
            <div className="featureCardDescription">
              CoreQuiz, kullanıcılarına ücretsiz bir hizmet sunar. Herkes, ücret
              ödemeden sınırsızca sınavlara katılabilir ve kendi bilgi düzeyini
              geliştirebilir.
            </div>
          </div>
          <div className="featureCard" >
            <div className="featureCardSvg">
              <img src={fastSvg} alt="" width={75} height={75} />
            </div>
            <div className="featureCardHeader">Kısa Süreli Sınavlar</div>
            <div className="featureCardDescription">
              Kullanıcıların kısa süreli sınavlarla bilgi düzeylerini
              değerlendirmelerine olanak sağlar. Bu, kullanıcıların yoğun günlük
              programları içinde bile kolayca sınavlara katılabilme fırsatı
              sunar.
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <img src={certificateSvg} alt="" width={60} height={60} />
            </div>
            <div className="featureCardHeader">Sertifikalar ve Başarı</div>
            <div className="featureCardDescription">
              Sınavlardan başarıyla geçen kullanıcılar sertifikalar kazanırlar.
              Bu sertifikalar, kullanıcıların CV'lerinde ve kariyer
              gelişimlerinde önemli bir avantaj sağlar.
            </div>
          </div>
          <div className="featureCard" >
            <div className="featureCardSvg">
              <img src={categorySvg} alt="" width={60} height={60} />
            </div>
            <div className="featureCardHeader">Çeşitli Sınavlar</div>
            <div className="featureCardDescription">
              CoreQuiz, kullanıcılara farklı konularda sınavlara katılma imkanı
              tanır. Bu sayede kullanıcılar ilgi alanlarına yönelik sınavlara
              katılıp bilgi düzeylerini ölçebilirler.
            </div>
          </div>
          <div className="featureCard" >
            <div className="featureCardSvg" style={{ marginBottom: "14px" }}>
              <img src={simpleSvg} alt="" width={60} height={60} />
            </div>
            <div className="featureCardHeader">Kullanıcı Dostu Arayüz</div>
            <div className="featureCardDescription">
              CoreQuiz, kullanıcı dostu bir arayüze sahiptir. Kolay gezinme, net
              bilgi sunumu ve basit kullanımı ile kullanıcıların sınavlara
              odaklanmalarını sağlar. Bu da kullanıcı deneyimini olumlu yönde
              etkiler.
            </div>
          </div>
          <div className="featureCard" >
            <div className="featureCardSvg">
              <img src={safetySvg} alt="" width={60} height={60} />
            </div>
            <div className="featureCardHeader">Güvenli Bilgi Saklama</div>
            <div className="featureCardDescription">
              Kullanıcı bilgileri, CoreQuiz tarafından JWT ile güvenli bir
              şekilde saklanır. Bu, kullanıcı şifrelerinin şifrelenmesini
              sağlar, böylece kullanıcı bilgileri gizli ve güvende tutulur.
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSectionHome">
        <div className='promationSection'>
              <div className='promationSectionText'>Hala CoreQuiz'e Üye Olmadınız Mı?</div>
              <button className="promationSectionButton"onClick={() => navigate("/register")}>Hemen Üye Ol!</button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
