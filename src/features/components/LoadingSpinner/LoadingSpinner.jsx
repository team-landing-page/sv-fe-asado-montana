import { CircularProgress, Box, Typography } from '@mui/material';
import PropTypes from "prop-types";
import "./LoadingSpinnerStyles.css"
const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress color="primary" size={80} />
      <Typography variant="body2" className='spinnerTypografy'>
        {message}
      </Typography>
    </Box>
  );
};

LoadingSpinner.propTypes = {
    message: PropTypes.string.isRequired,
  };

export default LoadingSpinner;
