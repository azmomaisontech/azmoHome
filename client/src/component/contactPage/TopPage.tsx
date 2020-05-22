import React, { useState } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import "../../styles/contact/TopPage.css";

const TopPage: React.FC = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="toppage">
      <div className="left">
        <h2 className="l-headings">Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quis eum aperiam harum deserunt similique
          architecto pariatur veniam voluptatum assumenda, earum repudiandae recusandae illo reiciendis. Earum adipisci
          id expedita magnam.
        </p>
      </div>
      <div className="right">
        <div
          onClick={handleClick}
          className={cx("toggler", {
            "toggler--active": display
          })}
        >
          We are here <br /> <i className="fas fa-map-marker-alt"></i>
        </div>
        <CSSTransition in={display} timeout={350} classNames="display" unmountOnExit appear>
          <div className="address-box">
            <p> 9, Rumukrusi Street, Portharcourt, Rivers, NG</p>
            <p>+234-(801)-111-1111</p>
            <p>test@azmohomes.com</p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default TopPage;
