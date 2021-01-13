import React from "react";
import "../assets/App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConsentAgreement from "../pages/ConsentAgreement";
import Agreed from "../pages/Agreed";
import Disagree from "../pages/Disagree";
import OptionPerson from "../pages/OptionPerson";
import DataProfile from "../pages/DataProfile";
import CovidScreening from "../pages/CovidScreening";
import NonCovidScreening from "../pages/NonCovidScreening";
import NonCovidResult from "../pages/NonCovidResult";
import Questionnaire from "../pages/Questionnaire";
import Finishing from "../pages/Finishing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/agreement">
          <ConsentAgreement />
        </Route>
        <Route exact path="/agreement/agreed">
          <Agreed />
        </Route>
        <Route exact path="/agreement/disagree">
          <Disagree />
        </Route>
        <Route exact path="/option">
          <OptionPerson />
        </Route>
        <Route exact path="/profile">
          <DataProfile />
        </Route>
        <Route exact path="/screening">
          <CovidScreening />
        </Route>
        <Route exact path="/screening/non-covid">
          <NonCovidScreening />
        </Route>
        <Route exact path="/result/non-covid">
          <NonCovidResult />
        </Route>
        <Route exact path="/questionnaire">
          <Questionnaire />
        </Route>
        <Route exact path="/finish">
          <Finishing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
