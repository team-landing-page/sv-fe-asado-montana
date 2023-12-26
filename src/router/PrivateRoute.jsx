import { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO: apply security here, change set state true with login logic
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType
}

export default PrivateRoute;

