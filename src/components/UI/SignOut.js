import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";
const SignOut = ({ setUsername, setPassword }) => {
  let navigate = useNavigate();

  const signOutHandler = () => {
    console.log("clicked");
    setUsername("");
    setPassword("");
    navigate("/");
  };
  return (
    <button onClick={signOutHandler} className="signout primary">
      <i className="fas fa-sign-out-alt" style={{fontSize: "30px"}}></i>
    </button>
  );
};
export default SignOut;
