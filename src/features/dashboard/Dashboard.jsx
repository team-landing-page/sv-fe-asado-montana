import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigateTo = useNavigate();

  const doLogout = () => {
    navigateTo('/login');
  }
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h4" gutterBottom>
        Home/Landing page placement
      </Typography>
      <Box mt={5}>
        {/* Adjust the margin (mt) based on your design */}
        <Button 
          variant="contained" 
          color="primary"
          onClick={doLogout}
          style={{ borderRadius: "32.5px", height: "65px", width: "384px", textTransform: 'uppercase', fontWeight: 600 }}
          >
          Logout
        </Button>
      </Box>
      </Box>
    </>
  )
}

export default Dashboard;
