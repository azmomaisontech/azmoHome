import React from "react";
import "../../styles/properties/FilterBox.css";

const FilterBox: React.FC = () => {
  return (
    <section className="filterbox">
      <form className="search-input">
        <input type="text" placeholder="Address, city or state" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="box">
        <h3>Price($)</h3>
        <div className="form-group flex">
          <label htmlFor="min">Min:</label>
          <input type="number" id="min" />
        </div>
        <div className="form-group flex">
          <label htmlFor="max">Max:</label>
          <input type="number" id="max" />
        </div>
      </div>
      <div className="box">
        <h3>Beds&Baths</h3>
        <div className="form-group flex">
          <label htmlFor="bed">Bed:</label>
          <input type="number" name="" id="bed" />
        </div>
        <div className="form-group flex">
          <label htmlFor="bath">Bath:</label>
          <input type="number" name="" id="bath" />
        </div>
      </div>
      <div className="box">
        <h3>Home types</h3>
        <div className="form-group">
          <input type="checkbox" name="" id="house" /> <label htmlFor="house">House</label>
        </div>
        <div className="form-group">
          <input type="checkbox" name="" id="apartment" /> <label htmlFor="apartment">Apartment</label>
        </div>
        <div className="form-group">
          <input type="checkbox" name="" id="office" /> <label htmlFor="office">Office</label>
        </div>
        <div className="form-group">
          <input type="checkbox" name="" id="land" /> <label htmlFor="land">Land</label>
        </div>
      </div>
    </section>
  );
};

export default FilterBox;
