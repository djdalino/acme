import React from "react";
import "./insight.css";
const Card = ({ image, text, border, text2 }) => {
  return (
    <div className="insight-box-container">
      <div className="insight-box">
        <div>
          <img src={image} alt={text} />
        </div>
        <div className="insight-text-box">
          <p className={`${border} insight-text`}>{text}</p>
          <p className={`${border} insight-text`}>{text2}</p>
        </div>
      </div>
      <div className={`${border} insight-footer`}></div>
    </div>
  );
};

export default Card;
