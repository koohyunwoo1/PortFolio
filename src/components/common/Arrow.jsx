import React from "react";
import "../../style/Common/Arrow.css";

const Arrow = ({ onClick }) => {
  return (
    <div className="arrow" onClick={onClick}>
      <span></span>
      <span></span>
    </div>
  );
};

export default Arrow;
