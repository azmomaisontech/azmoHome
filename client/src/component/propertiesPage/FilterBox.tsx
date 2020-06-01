import React, { useState } from "react";
import "../../styles/properties/FilterBox.css";

const FilterBox = () => {
  const [modal, showModal] = useState(false);

  const handleModal = () => {
    showModal(!modal);
  };

  return (
    <div className="filterbox">
      <form className="search-input">
        <input type="text" placeholder="Address, city or state" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <button onClick={handleModal}>
        Price <i className="fas fa-sort-down"></i>
      </button>
      {modal && (
        <div className="menu-list">
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      )}
      {/* <li className="dropdown-menu">
          <button>
            Bed&Bath <i className="fas fa-sort-down"></i>
          </button>
          <div className="menu-list">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </li>
        <li className="dropdown-menu">
          <button>
            Home type <i className="fas fa-sort-down"></i>
          </button>
          <div className="menu-list">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </li> */}
    </div>
  );
};

export default FilterBox;
