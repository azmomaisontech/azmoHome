import * as React from "react";
import SearchHouse from "./SearchHouse";
import "../styles/HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks">
      <div className="container">
        <SearchHouse />
        <div className="hiw-content">
          <h4>FIND YOUR DREAM HOUSE</h4>
          <h2 className="l-headings">How it Work</h2>
          <span className="underline"></span>
          <div className="articles">
            <article>
              <i className="fas fa-search"></i>
              <h3> Search & Find Apartment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.{" "}
              </p>
            </article>
            <article>
              <i className="fas fa-building"></i>
              <h3> Find Your Room</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.{" "}
              </p>
            </article>
            <article>
              <i className="fas fa-headset"></i> <h3> Talk To Agent</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
