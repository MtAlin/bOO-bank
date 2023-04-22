import React from "react";
import people01 from "../assets/people01.png";
import people02 from "../assets/people02.png";
import people03 from "../assets/people03.png";
function PeopleCard() {
  return (
    <div className="container plpCard">
      <div className="row">
        <div className="col-lg-3 bg my-3">
          <h2>"</h2>
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="d-flex plpImg">
            <img src={people01}></img>
            <div>
              <h6>Herman Jensen</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 my-3">
          <h2>"</h2>
          <p>
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="d-flex plpImg">
            <img src={people02}></img>
            <div>
              <h6>Steve Mark</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 my-3">
          <h2>"</h2>
          <p>
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="d-flex plpImg">
            <img src={people03}></img>
            <div>
              <h6>Kenn Gallagher</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
