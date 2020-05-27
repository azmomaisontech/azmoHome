import * as React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/account/AccountNavBar.css";

const AccountNavBar: React.FC = () => {
  return (
    <nav className="account-nav">
      <ul>
        <li>
          <NavLink exact to="/account/listings" activeClassName="active">
            Listings
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/account/savedhomes" activeClassName="active">
            Saved homes
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/account/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/account/setting" activeClassName="active">
            Account settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccountNavBar;
