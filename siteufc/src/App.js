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