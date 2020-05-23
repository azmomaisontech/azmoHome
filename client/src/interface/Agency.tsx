import * as React from "react";
import "../styles/agency/Agency.css";
import SearchBar from "../component/agencyPage/SearchBar";
import Agents from "../component/agencyPage/Agents";

const Agency: React.FC = () => {
  return (
    <main id="agency">
      <div className="container">
        <SearchBar />
        <Agents />
      </div>
    </main>
  );
};

export default Agency;
