import React from "react";

import "../assets/styles/components/Footer.scss";

const Footer = (props) => {
  const { handleModal } = props;

  const handleClick = () => {
    handleModal();
  };

  return (
    <footer className="footer">
      <button className="footer__button btn" onClick={handleClick}>
        Rules
      </button>
    </footer>
  );
};

export default Footer;
