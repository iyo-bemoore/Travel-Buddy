import React from "react";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Travel Buddy logo" />
      <div className="header__phrase">
        <span className="phrase__span">We get you there!</span>
      </div>
    </div>
  );
};

export default Header;
