import React, { useEffect, useState } from "react";

import "../assets/styles/components/MainPlaying.scss";

import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const MainPlaying = (props) => {
  const { handleStart, optionSelected, handleScore } = props;

  const [optionHouse, setOptionHouse] = useState("");
  const [pickedImage, setPickedImage] = useState("");
  const [pickedHouse, setPickedHouse] = useState("");

  const [result, setResult] = useState("");

  const handleClick = () => {
    handleStart();
  };

  useEffect(() => {
    switch (optionSelected) {
      case "rock":
        setPickedImage(rock);
        break;
      case "paper":
        setPickedImage(paper);
        break;
      case "scissors":
        setPickedImage(scissors);
        break;

      default:
        setPickedImage("");
        break;
    }
  }, [optionSelected]);

  useEffect(() => {
    switch (optionHouse) {
      case "rock":
        setPickedHouse(rock);
        break;
      case "paper":
        setPickedHouse(paper);
        break;
      case "scissors":
        setPickedHouse(scissors);
        break;

      default:
        setPickedHouse("");
        break;
    }
  }, [optionHouse]);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      const options = ["rock", "paper", "scissors"];
      setOptionHouse(options[Math.floor(Math.random() * options.length)]);
    }, 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    if (
      (optionSelected === "rock" && optionHouse === "scissors") ||
      (optionSelected === "paper" && optionHouse === "rock") ||
      (optionSelected === "scissors" && optionHouse === "paper")
    ) {
      setResult("you win");
      handleScore();
    } else if (optionSelected === optionHouse) {
      setResult("tie");
    } else {
      setResult("you lose");
    }
    //eslint-disable-next-line
  }, [optionHouse, optionSelected]);

  return (
    <main className="playing">
      <div className="main__playing">
        <div className="main__playing__option winner">
          <p className="main__playing__option__title">You picked</p>
          <img className={optionSelected} src={pickedImage} alt="picked" />
        </div>

        {optionHouse ? (
          <div className="main__playing__message">
            <p className="main__playing__message__result">{result}</p>
            <button
              className="btn main__playing__message__button"
              onClick={handleClick}
            >
              play again
            </button>
          </div>
        ) : null}

        <div className="main__playing__option">
          <p className="main__playing__option__title">The house picked</p>
          {pickedHouse ? (
            <img className={optionHouse} src={pickedHouse} alt="house picked" />
          ) : (
            <div className="selecting"></div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainPlaying;
