import React from "react";

function HandleCard({ logo, handleStyle, title, text, className }) {
  return (
    <div className={`${className} rewards py-4`}>
      <div className={handleStyle}>
        <img src={logo}></img>
      </div>
      <div className="px-1">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default HandleCard;
