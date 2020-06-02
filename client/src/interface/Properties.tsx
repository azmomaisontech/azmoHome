import React from "react";
import FilterBox from "../component/propertiesPage/FilterBox";
import PropertiesBox from "../component/propertiesPage/PropertiesBox";
import "../styles/properties/Properties.css";

const Properties = () => {
  return (
    <main id="properties">
      <div className="container">
        <FilterBox />
        <PropertiesBox />
      </div>
    </main>
  );
};

export default Properties;
