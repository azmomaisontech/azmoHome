import React from "react";
import "../styles/properties/Properties.css";
import FilterBox from "../component/propertiesPage/FilterBox";
import PropertiesBox from "../component/propertiesPage/PropertiesBox";

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
