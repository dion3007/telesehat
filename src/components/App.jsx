import React from "react";
import "../assets/App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConsentAgreement from "../pages/ConsentAgreement";
import Agreed from "../pages/Agreed";
import Disagree from "../pages/Disagree";

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
      </Switch>
    </div>
  );
}

export default App;
