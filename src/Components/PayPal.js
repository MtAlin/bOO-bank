import React from "react";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";

function PayPal() {
  return (
    <div className="container py-5 paypal">
      <div className="row">
        <div className="col-lg-6 ">
          <img className="w-100" src={bill}></img>
        </div>
        <div className="col-lg-6">
          <h2>Easily control your billing & invoicing.</h2>
          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="py-2">
            <img src={google}></img>
            <img className="px-3" src={apple}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayPal;
