import React from "react";
import "./LoadingElement.css";
const LoadingElement = () => {
  return (
    <>
      <div className="load-wrapp">
        <div className="load-1">
          <h3>Loading Feedback</h3>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingElement;