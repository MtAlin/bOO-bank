import React from "react";

function CardStatistic({ number }) {
  return (
    <div className="statistic">
      <p>{number}</p>
      <p>USER ACTIVE</p>
    </div>
  );
}

export default CardStatistic;
