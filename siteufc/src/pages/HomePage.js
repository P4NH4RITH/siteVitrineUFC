import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WallPaper from "../components/WallPaper";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="content">
        <section className="section-img">
          <WallPaper />
        </section>
        <section className="section-story row">
          <h1 className="text-center">L'histoire du MMA</h1>
          <p className="col">
            L'Ultimate Fighting Championship ou UFC est une organisation
            sportive américaine d'arts martiaux mixtes (MMA), créée en novembre
            1993.Résultat de recherche d'images pour "ufc" Elle a pour but de
            confronter des combattants issus de tout type d'arts martiaux pour
            combattre les uns contre les autres dans des règles libres, mais
            très vite des règles sont fixées pour la sécurité des combattants.
          </p>
          <p className="col">
            De nos jours, malgré une création très récente, L'UFC attirent
            jusqu'à plus de 56 000 spectateurs en 2015 pour un seul combat
            montrant l'attraction fulgurante du nombre de spectateurs qui a
            était multiplié par 20 en 20 ans.
            <br />
            De plus, l'UFC se mondialise avec l'organisation d'événements, en
            2017, au Brésil ou au Japon par exemple. Ce qui caractérise l'UFC
            c'est la cage (en forme d'octogone).
          </p>

          <img className="col" src="../img/trainning.jpg" alt="dont know" />
          <aside className="col">
            <h5 className="text-center">Notre histoire</h5>
            <p>
              Si vous voulez en savoir plus sur l'histoire de notre club,
              cliquez sur la flêche
            </p>
            <NavLink exact to="histoire" activeClassName="nav-active">
              <legend>en savoir plus...</legend>
            </NavLink>
          </aside>
        </section>
        <section className="section-members">
          <h1 className="text-center">Notre team</h1>
          <p className="text-center">
            N'hesitez surtout pas a jeter un coup d'oeil à notre team de
            combatants Cliquez sur la flèche pour en savoir plus
          </p>
          <NavLink exact to="membres" activeClassName="nav-active">
            <legend className="text-center">en savoir plus...</legend>
          </NavLink>
        </section>
        <section className="section-info">
          <h1 className="text-center">Actualités</h1>
          <p className="text-center">
            Vous pourrez également trouver sur notre site une section concernant
            les règles anti-Covid en vigueur ainsi que les horaires de nôtre
            salle.
          </p>
          <NavLink exact to="infos" activeClassName="nav-active">
            <legend className="text-center">en savoir plus...</legend>
          </NavLink>
        </section>
        <section className="section-contact">
          <h1 className="text-center">s'inscrire</h1>
          <p className="text-center">
            Si vous souhaitez rejoindre la Team, cliquez sur la flèche.
          </p>
          <NavLink exact to="infos" activeClassName="nav-active">
            <legend className="text-center">en savoir plus...</legend>
          </NavLink>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
