import Header from "./Header";
import Footer from "./Footer";
import "./Certificate.css";
import image from "../images/CoreQuizİleSeviyeniKanıtla.png";

function Certificate() {
  return (
    <div className="CertificateContainer">
      <Header />
      <div className="certificateCards">
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">Algoritma Sınavı</h2>
              <h6 className="certificateDescription">
                CoreQuiz, hızlı ve etkili bir şekilde kendinizi
                değerlendirmenize olanak tanıyan bir online test
                platformudur.Sitemizdeki testler, farklı alanlardaki
                yeterlilikleri ölçmek üzere tasarlanmıştır. Sertifikalarınız, iş
                başvurularında ve kariyerinizde sizin için önemli bir avantaj
                sağlar. CoreQuiz, kullanıcılarına hızlı ve güvenilir bir şekilde
                bilgi düzeylerini belgeleme imkanı sunar. Hemen şimdi CoreQuiz'e
                üye olun, konulara özel testleri çözerek kendinizi geliştirin ve
                başarıyı yakalayın.{" "}
                <b className="certificateDescriptionBold">
                  Unutmayın, başarıya giden yolda CoreQuiz yanınızda!
                </b>
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={image} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">
                40 dakikada farklı kategorilerde sertifikalar elde
                edebilirsiniz!
              </h2>
              <h6 className="certificateDescription">
                CoreQuiz, hızlı ve etkili bir şekilde kendinizi
                değerlendirmenize olanak tanıyan bir online test
                platformudur.Sitemizdeki testler, farklı alanlardaki
                yeterlilikleri ölçmek üzere tasarlanmıştır. Sertifikalarınız, iş
                başvurularında ve kariyerinizde sizin için önemli bir avantaj
                sağlar. CoreQuiz, kullanıcılarına hızlı ve güvenilir bir şekilde
                bilgi düzeylerini belgeleme imkanı sunar. Hemen şimdi CoreQuiz'e
                üye olun, konulara özel testleri çözerek kendinizi geliştirin ve
                başarıyı yakalayın.{" "}
                <b className="certificateDescriptionBold">
                  Unutmayın, başarıya giden yolda CoreQuiz yanınızda!
                </b>
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={image} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">
                40 dakikada farklı kategorilerde sertifikalar elde
                edebilirsiniz!
              </h2>
              <h6 className="certificateDescription">
                CoreQuiz, hızlı ve etkili bir şekilde kendinizi
                değerlendirmenize olanak tanıyan bir online test
                platformudur.Sitemizdeki testler, farklı alanlardaki
                yeterlilikleri ölçmek üzere tasarlanmıştır. Sertifikalarınız, iş
                başvurularında ve kariyerinizde sizin için önemli bir avantaj
                sağlar. CoreQuiz, kullanıcılarına hızlı ve güvenilir bir şekilde
                bilgi düzeylerini belgeleme imkanı sunar. Hemen şimdi CoreQuiz'e
                üye olun, konulara özel testleri çözerek kendinizi geliştirin ve
                başarıyı yakalayın.{" "}
                <b className="certificateDescriptionBold">
                  Unutmayın, başarıya giden yolda CoreQuiz yanınızda!
                </b>
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={image} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
