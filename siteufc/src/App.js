import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import MembersPage from "./pages/MembersPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/infos" exact component={InfoPage} />
        <Route path="/membres" exact component={MembersPage} />
        <Route path="/histoire" exact component={StoryPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/inscription" exact component={SubscriptionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
