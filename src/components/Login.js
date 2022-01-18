import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = (props) => {
  let navigate = useNavigate();
  const { username, setUsername, password, setPassword } = props;
  const loginClickHandler = (e) => {
    e.preventDefault();
    if (username === "foo" && password === "bar") {
      navigate("/home");
    } else {
      setUsername("");
      setPassword("");
    }
  };
  return (
    <>
      <div>
        <div className="login">
          <div className="form-container">
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button onClick={loginClickHandler}>login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
