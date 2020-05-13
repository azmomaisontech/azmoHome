import * as React from "react";
import HiWorksContent from "./HiWorksContent";
import SearchHouse from "./SearchHouse";
import "../styles/HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks">
      <div className="container">
        <SearchHouse />
        <HiWorksContent />
      </div>
    </section>
  );
};

export default HowItWorks;
