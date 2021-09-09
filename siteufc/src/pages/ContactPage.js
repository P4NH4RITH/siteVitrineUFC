import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Form from "../components/Form";
import Map from "../components/Map";

const ContactPage = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="form-contact row">
        <div className="col">
          <Form />
        </div>
        <div className="col">
          <Map />
          <address>
            <a href="tel:+648147408">
              <i class="fas fa-phone"></i> numero direct du Dojo 03 20 45 63 12
            </a>
            <br></br>
            <a href="tel:+648147408">
              <i class="fas fa-phone"></i>
              numéro de téléphone pour s'inscrire 06 23 45 63 78
            </a>
          </address>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
