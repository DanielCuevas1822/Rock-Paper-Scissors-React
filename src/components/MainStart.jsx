import React from "react";

import "../assets/styles/components/MainStart.scss";

import triangle from "../assets/images/bg-triangle.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const MainStart = (props) => {
  const { handleStart, setOptionSelected } = props;

  const handleClick = (e) => {
    handleStart();
    setOptionSelected(e.target.dataset.value);
  };

  return (
    <main className="start">
      <div className="main__start">
        <img
          className="main__start__triangle triangle"
          src={triangle}
          alt="triangle"
        />
        <img
          className="main__start__paper paper"
          src={paper}
          alt="paper"
          onClick={handleClick}
          data-value="paper"
        />
        <img
          className="main__start__rock rock"
          src={rock}
          alt="rock"
          onClick={handleClick}
          data-value="rock"
        />
        <img
          className="main__start__scissors scissors"
          src={scissors}
          alt="scissors"
          onClick={handleClick}
          data-value="scissors"
        />
      </div>
    </main>
  );
};

export default MainStart;
