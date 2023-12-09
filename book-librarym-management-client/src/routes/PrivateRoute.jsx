import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div className="text-center text-6xl p-16">
        <progress className="loading loading-spinner loading-lg"></progress>
      </div>
    );
  }
  //   wait for loading

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
