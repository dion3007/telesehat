import React from "react";
import "../assets/App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConsentAgreement from "../pages/ConsentAgreement";
import Agreed from "../pages/Agreed";
import Disagree from "../pages/Disagree";
import OptionPerson from "../pages/OptionPerson";
import DataProfile from "../pages/DataProfile";

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
      </Switch>
    </div>
  );
}

export default App;
