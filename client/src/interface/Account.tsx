import React, { useContext, FormEvent } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountNavBar from "../component/accountPage/AccountNavBar";
import Listings from "../component/accountPage/Listings";
import AccountSetting from "../component/accountPage/AccountSetting";
import SavedHomes from "../component/accountPage/SavedHomes";
import AccountProfile from "../component/accountPage/AccountProfile";
import AccountFileUpload from "../component/accountPage/AccountFileUpload";
import "../styles/account/Account.css";

type SubmitForm = FormEvent<HTMLFormElement>;

const Account: React.FC = () => {
  const { path } = useRouteMatch();

  const submitName = (e: SubmitForm, data: string) => {
    e.preventDefault();
    console.log("Sent");
  };

  return (
    <main id="account">
      <div className="container">
        <AccountNavBar />
        <Switch>
          <Route path={`${path}/listings`} component={Listings} />
          <Route path={`${path}/savedhomes`} component={SavedHomes} />
          <Route path={`${path}/setting`} render={props => <AccountSetting handleSubmit={submitName} {...props} />} />
          <Route path={`${path}/file_upload`} component={AccountFileUpload} />
          <Route path={`${path}/account_setting`} component={AccountSetting} />
          <Route path={[`${path}`, `${path}/profile`]} component={AccountProfile} />
        </Switch>
      </div>
    </main>
  );
};

export default Account;
