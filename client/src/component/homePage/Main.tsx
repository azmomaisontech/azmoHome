import * as React from "react";
import "../../styles/home/Main.css";

const Main: React.FC = () => {
  return (
    <main id="home">
      <div className="container">
        <h2>Your Dream Home In One Click</h2>
        <form className="search-input">
          <input type="text" placeholder="Enter an address, city, state or zip code" />
          <i className="fas fa-search"></i>
        </form>
      </div>
    </main>
  );
};

export default Main;
