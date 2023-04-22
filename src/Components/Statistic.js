import React from "react";
import CardStatistic from "./CardStatistic";

function Statistic() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md d-flex justify-content-around ">
          <CardStatistic number="3800+" />
        </div>
        <div className="col-md d-flex justify-content-around ">
          <CardStatistic number="230+" />
        </div>
        <div className="col-md  d-flex justify-content-around">
          <CardStatistic number="$230M+" />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
