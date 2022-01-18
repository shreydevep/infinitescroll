import { Navigate } from "react-router-dom";

function PrivateRoute({ children, username, password }) {
  return username === "foo" && password === "bar" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
export default PrivateRoute;
