import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./interface/Home";
import Login from "./interface/Login";
import Register from "./interface/Register";
import Contact from "./interface/Contact";
import Agency from "./interface/Agency";
import AgentInfo from "./interface/AgentInfo";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/agency" component={Agency} />
        <Route exact path="/agent_info/:id" component={AgentInfo} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
