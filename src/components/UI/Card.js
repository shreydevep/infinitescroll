import React, { useState } from "react";
import "./Card.css";
import DropDown from "./DropDown";
import RoundThumbnail from "./RoundThumbnail";
const Card = (props) => {
  const { name, imageUrl } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="card-container">
        <RoundThumbnail imageUrl={imageUrl} />
        <h3>{name.first + " " + name.last}</h3>
        <button
          className="toggle ghost"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <i
              className="fas fa-toggle-on"
              style={{
                border: "1px solid #03BFCB",
                borderRadius: "50%",
                padding: "7px",
              }}
            ></i>
          ) : (
            <i
              className="fas fa-toggle-off"
              style={{
                background: "transparent",
                border: "1px solid #03BFCB",
                borderRadius: "50%",
                padding: "7px",
              }}
            ></i>
          )}
        </button>
        {toggle ? <DropDown /> : <></>}
      </div>
    </>
  );
};
export default Card;
