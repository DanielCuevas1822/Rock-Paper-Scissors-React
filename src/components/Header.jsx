import React from "react";

import logo from "../assets/images/logo.svg";

import "../assets/styles/components/Header.scss";

const Header = (props) => {
  const { score } = props;
  return (
    <header>
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__score">
          <p className="header__score__title">score</p>
          <p className="header__score__score">{score}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
