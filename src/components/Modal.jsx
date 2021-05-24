import React from "react";

import "../assets/styles/components/Modal.scss";

import imageRules from "../assets/images/image-rules.svg";
import iconClose from "../assets/images/icon-close.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__container__title">
          <p>Rules</p>
        </div>
        <div className="modal__container__button">
          <img src={iconClose} alt="close" />
        </div>
        <div className="modal__container__image">
          <img src={imageRules} alt="rules" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
