import React from "react";

import "../assets/styles/components/Main.scss";

import triangle from "../assets/images/bg-triangle.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const Main = () => {
  return (
    <main>
      <div className="main">
        <img className="main__triangle" src={triangle} alt="triangle" />
        <img className="main__paper" src={paper} alt="paper" />
        <img className="main__rock" src={rock} alt="rock" />
        <img className="main__scissors" src={scissors} alt="scissors" />
      </div>
    </main>
  );
};

export default Main;
