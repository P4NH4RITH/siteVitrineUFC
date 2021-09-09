import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FighterCard from "../components/FighterCard";
const MembersPage = () => {
  return (
    <div>
      <Navigation />
      <div className="main">

      <FighterCard />
      </div>
      <Footer />
    </div>
  );
};

export default MembersPage;