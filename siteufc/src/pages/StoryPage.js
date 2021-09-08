import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const StoryPage = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="layout row">
        <div className="img-story col">
          <img src="../img/justin-ng-small.jpg" alt="img-1"></img>
          <img src="../img/amateursmall.jpg" alt="img-2"></img>
        </div>
        <div className="text col">
          <h1>L'histoire de notre club</h1>
          <h3>Le commencement</h3>
          <p>
            Fondé en 2005 le Ayoub-MMA-club tient son nom du fondateur du club
            qui lors de son adolescence difficile, se fesait régulièrement
            prendre à parti par les autres jeunes de son collège et de son
            quartier car il était de nature plus frêle que le reste de ces
            camarades. Ne pouvant compter que sur lui même pour se défendre, il
            decida de suivre des cours de judo afin d'apprendre à se defendre.
            Mais le judo lui appris plus la discipline que la defense en elle
            même. Le problème pour Ayoub c'est qu'il apprenait à se battre de
            maniere noble et fairplay.
          </p>
          <p>
            Sauf qu'en dehors du dojo c'était la loi de la jungle, tous les
            coups étaient permis. Il se rendit rapidement compte que le judo
            n'était pas suffisant pour dominer ses adversaires sur le terrain et
            arreta rapidement de se rendre au dojo.
          </p>
          <h3>Le début d'une passion</h3>
          <p>
            Alors qu'il allait baisser les bras, rester une victime toute sa
            vie, il fit la rencontre de Nicolas, fan inconditionnel de
            Jean-Claude Vandamme et de sport de combat, il montra pour la
            premiere fois à Ayoub un Match de MMA qu'il avait reussi à
            enregistrer discrètement sur le magnetoscope familial.
            <br /> Ce fut pour lui 'La révélation' ainsi que le début d'une
            grande amitié. Enfin un sport de combat sans règle, comme dans la
            rue.
          </p>
          <p>
            Le duo regarda le plus possible de matchs afin de comprendre et
            répéter les mouvements. Ils s'entraînèrent plusieurs mois dans le
            jardin de Nicolas. Puis il devienrent tous les 2 les 'vrais'
            brutasses du quartier.
          </p>
          <h3>La fondation du club</h3>
          <p>
            Ayoub et Nicolas qui etaient devenus inséparables grandirent
            ensemble avec un rêve commun, partager leur passion du MMA.Et c'est
            en 2005 qu Ayoub avec l'aide de Nicolas créea l'association "Ayoub
            MMA-Club"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
