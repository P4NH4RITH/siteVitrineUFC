import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Map from "../components/Map";

const InfoPage = () => {
  return (
    <div className="info">
      <Navigation />
      <div className="main">
        <section className="flex-info">
          <div className="layout-info row">
            <div className="text col-lg-9">
              <h2>les règles contre le Covid en vigueur dans le club</h2>
              <h5>Qu’est-ce que le pass sanitaire ?</h5>
              <p>
                Le pass sanitaire consiste en la présentation, numérique (via
                l’application TousAntiCovid) ou papier, d’une preuve sanitaire,
                parmi les trois suivantes : - la vaccination, à la condition que
                les personnes disposent d’un schéma vaccinal complet et du délai
                nécessaire après l’injection finale. - le certificat de test
                négatif de moins de 72 heures. - le résultat d’un test RT-PCR ou
                antigénique positif attestation du rétablissement du Covid-19
                datant d’au moins 11 jours et de moins de 6 moi.
              </p>
              <h5>Où et quand faut-il présenter le pass sanitaire ?</h5>
              <p>
                Pour les sportifs majeurs (18 ans et plus), le pass sanitaire
                est requis dans le cadre de la pratique en clubs dès maintenant
                pour accéder à tous les établissements sportifs, qu’ils soient
                de plein air ou couverts, et quel que soit le nombre de
                personnes accueillies. Toutes les activités et pratiques
                sportives sont concernées (entraînements, stages, opérations de
                rentrée, compétitions etc…), ainsi que les venues d’ordre
                administratif (inscriptions, accompagnement etc…)
              </p>
              <h5>Y -a-t-il des exemptions ?</h5>
              <p>
                Il existe deux exemptions temporaires : - jusqu’au 29 août
                inclus pour les salariés, les bénévoles, les enseignants et les
                stagiaires de la formation professionnelle (quand les stages se
                déroulent en dehors des clubs). - jusqu’au 29 septembre inclus
                pour les mineurs de 12 à 17 ans. Sont également exemptés de pass
                de façon permanente : - les mineurs de moins de 12 ans - les
                personnes présentant une attestation de contre-indication
                médicale à la vaccination remise par un médecin.
              </p>
              <h5>Qui contrôle le pass sanitaire ?</h5>
              <p>
                Le responsable de l’équipement ou l’organisateur de l’activité
                désignent les personnes habilitées à effectuer le contrôle du
                pass sanitaire, qui doivent tenir un registre indiquant les
                jours et horaires des contrôles effectués. Ce relevé permet, si
                l’établissement a été fréquenté par une personne contaminée, de
                mettre en œuvre le « contact tracing ». Les personnes contrôlant
                habituellement l’accès aux installations peuvent effectuer les
                contrôles, ou à défaut celles qui organisent l’activité, comme
                les dirigeants de club ou les entraîneurs.
              </p>
              <h5>Le port du masque est-il obligatoire ?</h5>
              <p>
                Le port du masque n’est pas obligatoire pour les personnes ayant
                accédé aux établissements sportifs au moyen du pass sanitaire.
                Néanmoins, quand cela est possible, son utilisation reste une
                mesure barrière efficace qui est conseillée. Le port du masque
                peut toutefois être rendu obligatoire soit par arrêté
                préfectoral, soit par décision de l’exploitant ou de
                l’organisateur.
              </p>
            </div>
          </div>
          <div className="layout-info row">
            <div className="col">
              <img
                className="covid"
                src="../img/Panorama_de_la_Gouvernance.jpg"
                alt="covid"
              />
              <table className="table">
                <thead>
                  <tr>
                    <th colspan="3">Horaires de la salle</th>
                  </tr>
                  <tr>
                    <td>jours de la semaine</td>
                    <td>Matin</td>
                    <td>après midi</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td>fermé</td>
                    <td>14h-19h30</td>
                  </tr>
                  <tr>
                    <td>Mardi</td>
                    <td>9h-12h</td>
                    <td>14h-19h30</td>
                  </tr>
                  <tr>
                    <td>Mercredi</td>
                    <td>10h-12h30</td>
                    <td>14h30-19h</td>
                  </tr>
                  <tr>
                    <td>Jeudi</td>
                    <td>9h-12h</td>
                    <td>14h-19h30</td>
                  </tr>
                  <tr>
                    <td>Vendredi</td>
                    <td>9h-12h</td>
                    <td>14h-21h</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>8h-12h</td>
                    <td>14h-21h</td>
                  </tr>
                  <tr>
                    <td>Dimanche</td>
                    <td>9h-11h30</td>
                    <td>fermé</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="horaire" colspan="3">
                      Les horaires sont susceptible de changer
                    </td>
                  </tr>
                </tfoot>
              </table>
              <img className="covid" src="../img/mask-50.jpg" alt="fighter" />
              <img className="covid" src="../img/mask-20.jpg" alt="fighter" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default InfoPage;
