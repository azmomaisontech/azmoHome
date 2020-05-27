import * as React from "react";
import AccountNavBar from "../component/accountPage/AccountNavBar";
import "../styles/account/Account.css";
import { Switch, Route } from "react-router-dom";
import Listings from "../component/accountPage/Listings";

const Account: React.FC = () => {
  return (
    <main id="account">
      <div className="container">
        <AccountNavBar />
        <Switch>
          <Route exact path="/account/listings" component={Listings} />
        </Switch>
      </div>
    </main>
  );
};

export default Account;
