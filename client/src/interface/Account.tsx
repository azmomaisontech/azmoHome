import * as React from "react";
import AccountNavBar from "../component/accountPage/AccountNavBar";
import "../styles/account/Account.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Listings from "../component/accountPage/Listings";
import AccountSetting from "../component/accountPage/AccountSetting";
import SavedHomes from "../component/accountPage/SavedHomes";
import Profile from "../component/accountPage/Profile";

const Account: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <main id="account">
      <div className="container">
        <AccountNavBar />
        <Switch>
          <Route path={`${path}/listings`} component={Listings} />
          <Route path={`${path}/savedhomes`} component={SavedHomes} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/setting`} component={AccountSetting} />
        </Switch>
      </div>
    </main>
  );
};

export default Account;
