import React from "react";
import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";

function VectorGroup() {
  return (
    <div className="container py-5 vector ">
      <div className="row  d-flex align-items-center">
        <div className="col-lg">
          <img className="w-75 my-4" src={airbnb}></img>
        </div>
        <div className="col-lg my-4">
          <img className="w-75" src={binance}></img>
        </div>
        <div className="col-lg my-4">
          <img className="w-75" src={coinbase}></img>
        </div>
        <div className="col-lg my-4">
          <img className="w-75" src={dropbox}></img>
        </div>
      </div>
    </div>
  );
}

export default VectorGroup;
