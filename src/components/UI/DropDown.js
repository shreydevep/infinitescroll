import React from "react";
import "./DropDown.css";
const DropDown = () => {
  return (
    <>
      <div className="drop-down">
        <div class="buttons">
          <button class="primary">
            <i class="fas fa-envelope" style={{ fontSize: "30px" }}></i>
          </button>
          <button class="primary ghost" style={{ fontSize: "30px" }}>
            <i class="fas fa-phone-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default DropDown;
