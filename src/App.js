import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainStart from "./components/MainStart";

import "./assets/styles/Reset.scss";
import "./assets/styles/App.scss";
import MainPlaying from "./components/MainPlaying";

import { useState } from "react";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setIsStart(!isStart);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Header score={score} />
      {isStart ? (
        <MainPlaying
          handleStart={handleStart}
          optionSelected={optionSelected}
          handleScore={handleScore}
        />
      ) : (
        <MainStart
          handleStart={handleStart}
          setOptionSelected={setOptionSelected}
        />
      )}
      <Modal handleModal={handleModal} showModal={showModal} />
      <Footer handleModal={handleModal} />
    </div>
  );
}

export default App;
