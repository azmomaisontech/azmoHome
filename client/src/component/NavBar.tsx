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
            <Link to="/"> Buy</Link>
          </li>
          <li>
            <Link to="/"> Rent </Link>
          </li>
          <li>
            <Link to="/"> Agent Finder</Link>
          </li>
          <li>
            <Link to="/"> Contact </Link>
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
