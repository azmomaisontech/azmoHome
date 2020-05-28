import * as React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "../../styles/account/AccountNavBar.css";

const AccountNavBar: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <nav className="account-nav">
      <ul>
        <li>
          <NavLink to={`${url}/listings`} activeClassName="active">
            Listings
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/savedhomes`} activeClassName="active">
            Saved homes
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/profile`} activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/setting`} activeClassName="active">
            Account settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccountNavBar;
