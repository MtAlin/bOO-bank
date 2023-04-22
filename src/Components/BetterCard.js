import React from "react";
import card from "../assets/card.png";

function BetterCard() {
  return (
    <div className="container py-5 bttCard">
      <div className="row">
        <div className="col-md-6 my-5">
          <h2>Find a better card deal in few easy steps.</h2>
          <p className="py-4 ">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button>Get Started</button>
        </div>
        <div className="col-md-6 my-5">
          <img className="w-100" src={card}></img>
        </div>
      </div>
    </div>
  );
}

export default BetterCard;
