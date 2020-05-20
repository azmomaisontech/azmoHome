import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/TopProperties.css";
import TopPropertiesCarousel from "./TopPropertiesCarousel";

const TopProperties: React.FC = () => {
  return (
    <section id="topprop">
      <div className="container">
        <div className="top-row">
          <div className="left">
            <h4 className="s-headings">TOP PROPERTY FOR YOU</h4>
            <h2 className="l-headings">Featured Properties</h2>
            <span className="underline"></span>
          </div>
          <Link className="btn" to="/">
            View All Properties
          </Link>
        </div>
        <div className="custom-carousel">
          <TopPropertiesCarousel />
        </div>
      </div>
    </section>
  );
};

export default TopProperties;
