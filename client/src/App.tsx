import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/auth/PrivateRoute";
import { AuthContext } from "./context/auth/AuthState";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./interface/Home";
import Login from "./interface/Login";
import Register from "./interface/Register";
import Contact from "./interface/Contact";
import Agency from "./interface/Agency";
import AgentInfo from "./interface/AgentInfo";
import Rating from "./interface/Rating";
import Properties from "./interface/Properties";
import Property from "./interface/Property";
import Listings from "./component/accountPage/Listings";
import AccountSetting from "./component/accountPage/AccountSetting";
import SavedHomes from "./component/accountPage/SavedHomes";
import AccountProfile from "./component/accountPage/AccountProfile";
import AccountFileUpload from "./component/accountPage/AccountFileUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    if (loadUser) {
      loadUser();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/agency" component={Agency} />
        <Route exact path="/agent_info/:id" component={AgentInfo} />
        <Route exact path="/agent_info/:id/rating" component={Rating} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/property/:id" component={Property} />
        <PrivateRoute exact path="/listings" component={Listings} />
        <PrivateRoute exact path="/savedhomes" component={SavedHomes} />
        <PrivateRoute exact path="/setting" component={AccountSetting} />
        <PrivateRoute exact path="/file_upload" component={AccountFileUpload} />
        <PrivateRoute exact path="/account_setting" component={AccountSetting} />
        <PrivateRoute exact path={["/account", "/profile"]} component={AccountProfile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
