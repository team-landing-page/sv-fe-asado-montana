import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../features/components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner message="Cargando..."/>;
  }
  if (Object.keys(user).length > 0) {
    return <Component {...rest} /> ;
  }
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType
}

export default PrivateRoute;

