import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul>
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
          <li>
            <Link to="/"> Help </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/"> Sign In</Link>
          </li>
          <li>
            <Link to="/"> Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
