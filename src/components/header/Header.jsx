import React from "react";
import logo from "../../assets/easy-convert-logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="easy convert logo"></img>
    </header>
  );
};

export default Header;
