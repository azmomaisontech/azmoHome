import React, { useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthState";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
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
          {isAuthenticated ? (
            <li>
              <NavLink to="/account" activeClassName="active">
                Account
              </NavLink>
            </li>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
