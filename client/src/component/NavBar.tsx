import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/"> HOME</Link>
          </li>
          <li>
            <Link to="/"> PROPERTY</Link>
          </li>
          <li>
            <Link to="/"> AGENTS</Link>
          </li>
          <li>
            <Link to="/"> NEWS</Link>
          </li>
          <li>
            <Link to="/"> CONTACT</Link>
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
