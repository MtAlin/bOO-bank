import React from "react";
import star from "../assets/star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";
import HandleCard from "./HandleCard";

function BussinessHandle() {
  return (
    <div className="container py-5 bussines">
      <div className="row">
        <div className="col-lg py-2 ">
          <h2>You do the business, we’ll handle the money.</h2>
          <p className="py-5">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button>Get Started</button>
        </div>
        <div className="col-lg py-2 ">
          <HandleCard
            logo={star}
            handleStyle={"first-child px-1 text-center"}
            title={"Rewards"}
            text={
              " The best credit cards offer some tantalizing combinations of promotions and prizes"
            }
          />
          <HandleCard
            className="secure-bg"
            logo={shield}
            handleStyle={"first-child px-1 text-center"}
            title={"100% Secured"}
            text={
              " We take proactive steps make sure your information and transactions are secure."
            }
          />
          <HandleCard
            logo={send}
            handleStyle={"first-child px-1 text-center"}
            title={"Balance Transfer"}
            text={
              " A balance transfer credit card can save you a lot of money in interest charges."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BussinessHandle;
