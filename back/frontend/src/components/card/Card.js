import React from "react";

import ReactCardFlip from "react-card-flip";
const st = {
  "background-color":"#3279bb",
}
const Card = ({image, id, isFlipped, handleClick, cardNumber }) => (
  <ReactCardFlip
    isFlipped={isFlipped}
    flipSpeedBackToFront={1}
    flipSpeedFrontToBack={1}
  >
    <img
    style={st}
      id={id}
      className={`card card-front  ${cardNumber !== -1 ? "" : "hide-card"}`}
      onClick={handleClick}
      key="front"
      src={image}
    />

    <img
      id={id}
      className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`}
      onClick={handleClick}
      key="back"
      src={cardNumber}
    />
  </ReactCardFlip>
);

export default Card;
