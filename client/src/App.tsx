import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./interface/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
