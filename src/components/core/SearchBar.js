import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search__destination">
        <input
          className="search__text"
          type="text"
          name="destiation"
          placeholder="where to? "
        />
      </div>
      <div className="search__dates">
        <div className="search__dates--from">
          <input className="search__dates-input" type="date" />
        </div>
        <div className="search__dates--to">
          <input className="search__dates-input" type="date" />
        </div>
      </div>
      <div className="search__pax">
        <input
          className="search__text"
          type="text"
          placeholder="adults - children"
        />
      </div>
      <div className="search__btn">
        <button className="search__btn--button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
