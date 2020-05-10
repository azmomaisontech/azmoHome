import * as React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <h1>AzmoHome</h1>
        <section>
          <div className="phone">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info">
              <span className="text-gray">Phone: </span> <br /> +234(813)-726-9920
            </div>
          </div>
          <div className="address">
            <div className="icon">
              <i className="fas fa-map"></i>
            </div>
            <div className="info">
              <span className="text-gray"> Address: </span>
              <br />
              16 Portharcourt Ave, RV
            </div>
          </div>
          <div className="email">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
              <span className="text-gray"> Email: </span>
              <br />
              test@azmohome.com
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
