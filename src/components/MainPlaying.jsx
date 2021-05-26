import React from "react";

import "../assets/styles/components/MainPlaying.scss";

import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const MainPlaying = () => {
  return (
    <main className="playing">
      <div className="main__playing">
        <div className="main__playing__option winner">
          <p className="main__playing__option__title">You picked</p>
          <img className="rock" src={rock} alt="picked" />
        </div>

        <div className="main__playing__message">
          <p className="main__playing__message__result">you win</p>
          <button className="btn main__playing__message__button">
            play again
          </button>
        </div>

        <div className="main__playing__option">
          <p className="main__playing__option__title">The house picked</p>
          <img className="scissors" src={scissors} alt="house picked" />
          {/* <div className="selecting"></div> */}
        </div>
      </div>
    </main>
  );
};

export default MainPlaying;
