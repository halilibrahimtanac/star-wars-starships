import React, { useState } from "react";
import "../App.css";

const Search = (props) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="search-container">
      <label>Name / Model</label>
      <input
        className="search-input"
        type="text"
        placeholder="Name / Model"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button
        className="filter-button"
        onClick={() => props.setFilterTerm(searchVal)}
      >
        Filter
      </button>
    </div>
  );
};

export default Search;
