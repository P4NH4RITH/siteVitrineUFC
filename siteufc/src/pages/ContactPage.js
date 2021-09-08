import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

const ContactPage = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="content-contact">
        <h1>Vous souhaitez vous inscrire ?</h1>
        <h2>
          Si vous aimer le combat, la discipline et que vous n'avez pas peur des
          bleus, notre club est fait pour vous !
        </h2>
        <h3>
          Remplissez ce formulaire ci dessous et nous etudierons votre demande
          d'inscritpion au plus vite
        </h3>
      </div>
      <Form />
      <div className="img">
        <img src="../img/trainning10min.jpg" alt="trainning" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
