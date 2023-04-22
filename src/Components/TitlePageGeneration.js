import React from "react";
import robot from "../assets/robot.png";

function TitlePageGeneration() {
  return (
    <div className="container py-5 tpg">
      <div className="row">
        <div className="col-lg-6 py-2">
          <p className="tpg-discount px-3 py-1">
            20% <span className="text-grey">DISCOUNT FOR</span> 1 MONTH{" "}
            <span className="text-grey">ACCOUNT</span>
          </p>
          <div className="tpg-started py-4">
            <h1>
              The Next <br></br>
              <span>Generation</span> <br></br> Payment Method.
            </h1>
            <div>
              <p>
                Get
                <i class="fa-thin fa-arrow-up-right-from-square text-white"></i>{" "}
                <br></br> started
              </p>
            </div>
          </div>
          <p className="tpg-paragraf">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="col-lg-6 py-2">
          <img className="w-100" src={robot}></img>
        </div>
      </div>
    </div>
  );
}

export default TitlePageGeneration;
