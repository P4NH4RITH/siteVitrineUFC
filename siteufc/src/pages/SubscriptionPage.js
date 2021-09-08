import Navigation from "../components/Navigation";
import Mailer from "../components/Form";
import Upload from "../components/Upload";

const SubscriptionPage = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque
        impedit, rerum, consectetur nostrum excepturi sapiente laudantium
        tempore eveniet autem dignissimos magni dolores nobis sequi non
        incidunt. Nam, deleniti veritatis.
      </div>
      <Mailer />
      <Upload />
    </div>
  );
};

export default SubscriptionPage;