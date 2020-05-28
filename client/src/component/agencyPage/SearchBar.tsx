import * as React from "react";
import "../../styles/agency/SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <section className="search">
      <form className="search-form">
        <input type="text" id="city" placeholder="Search by city" />
        <button type="submit">Search</button>
      </form>
      <form>
        <input type="text" id="name" placeholder="Filter by name" />
      </form>
    </section>
  );
};

export default SearchBar;
