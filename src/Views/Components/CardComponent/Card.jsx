import React from "react";

const Card = ({ card_img, card_text }) => {
  return (
    <>
      <div>
        <div className="cardone">
          <img src={card_img} alt="" />
        </div>
        <p className="text-center mt-2 card-para">{card_text}</p>
      </div>
    </>
  );
};

export default Card;
