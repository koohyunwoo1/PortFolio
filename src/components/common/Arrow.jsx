import React from "react";
import "../../style/Common/Arrow.css";

const Arrow = ({ onClick }) => {
  return (
    <div className="arrowContainer" onClick={onClick}>
      <div className="arrow">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Arrow;
