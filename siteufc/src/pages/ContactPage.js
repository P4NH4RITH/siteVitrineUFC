import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Form from "../components/Form";
import Map from "../components/Map";

const ContactPage = () => {
    return (
        <div className='contact'>
                        

            <Navigation />
            <div className="main">
            <Map />
            <Form />
            </div>
            <Footer />
        
        </div>
    )
}

export default ContactPage;
