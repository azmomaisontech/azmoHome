import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="left">
          <p>A Nigeria Based Real Estate agency for your home needs </p>
          <p>
            <span> test@azmohome.com </span> <span className="space">•</span> <span>000.111.2222</span>
            <span className="space">•</span> <span> 000.111.2222 </span>
          </p>
          <p>Rivers, NG </p>
          <p>Copyright &copy; {year} Azmo Home Inc. All Rights Reserved</p>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li className="space">+</li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li className="space">+</li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
