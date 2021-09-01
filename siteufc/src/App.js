<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Members from "./pages/Members";
import History from "./pages/History";
import Contacts from "./pages/Contacts";
import Inscription from "./pages/Inscription";
import notFound from "./pages/notFound";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/infos' exact component={Infos} />
                    <Route path='/members' exact component={Members} />
                    <Route path='/history' exact component={History} />
                    <Route path='/contacts' exact component={Contacts} />
                    <Route path='/inscription' exact component={Inscription} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;
=======
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import MembersPage from './pages/MembersPage'
import StoryPage from './pages/StoryPage'
import ContactPage from './pages/ContactPage'
import SubscriptionPage from './pages/SubscriptionPage'
import NotFoundPage from './pages/NotFoundPage'

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
    )
}

export default App
>>>>>>> 54d6ecb4936e965203dc37597cc3903a7eac8b57
