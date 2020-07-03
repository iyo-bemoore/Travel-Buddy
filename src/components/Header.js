import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Travel Buddy logo" />
      <SearchBar />
    </div>
  );
};

export default Header;
