import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    // TODO: create loading component for this...
    return <p>Cargando....</p>;
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

