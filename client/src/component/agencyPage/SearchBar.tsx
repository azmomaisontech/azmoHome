import * as React from "react";
import "../../styles/agency/SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <section className="search">
      <form className="search-form">
        <label htmlFor="city">Search by city </label>
        <input type="text" id="city" />
        <button type="submit">Search</button>
      </form>
      <form>
        <label htmlFor="name">Filter by name</label>
        <input type="text" id="name" />
      </form>
    </section>
  );
};

export default SearchBar;
