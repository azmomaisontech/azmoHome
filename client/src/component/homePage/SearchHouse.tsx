import * as React from "react";
import "../../styles/SearchHouse.css";

const SearchHouse: React.FC = () => {
  return (
    <section id="search-box">
      <form>
        <input type="text" placeholder="Enter an Address, City or State" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchHouse;
