import * as React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav id="main-nav">
      <div className="container">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Azmo<span>Homes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" activeClassName="active">
              Properties
            </NavLink>
          </li>

          <li>
            <NavLink to="/agency" activeClassName="active">
              Agent Finder
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
