import React from "react";

import "../assets/styles/components/MainStart.scss";

import triangle from "../assets/images/bg-triangle.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const MainStart = () => {
  return (
    <main>
      <div className="main__start">
        <img className="main__start__triangle" src={triangle} alt="triangle" />
        <img className="main__start__paper" src={paper} alt="paper" />
        <img className="main__start__rock" src={rock} alt="rock" />
        <img className="main__start__scissors" src={scissors} alt="scissors" />
      </div>
    </main>
  );
};

export default MainStart;
