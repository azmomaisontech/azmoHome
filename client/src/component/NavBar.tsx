import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">
              Azmo<span>Homes</span>
            </Link>
          </li>
          <li>
            <Link to="/"> Properties</Link>
          </li>

          <li>
            <Link to="/agency"> Agent Finder</Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login"> Sign In</Link>
          </li>
          <li>
            <Link to="/register"> Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
