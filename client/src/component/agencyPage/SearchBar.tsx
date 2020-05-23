import * as React from "react";

const SearchBar: React.FC = () => {
  return (
    <section className="search">
      <form>
        <input type="text" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <input type="text" />
    </section>
  );
};

export default SearchBar;
