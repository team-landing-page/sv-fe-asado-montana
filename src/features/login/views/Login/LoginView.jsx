import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { isEmailValid, isPasswordValid } from "../../../../utils/validators";
import { errorHandler } from "../../../../utils/errorHandler";
import useAuth from "../../../../hooks/useAuth";

import './Login.css'


export default function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigateTo = useNavigate();

  const validateLoginParams = () => {
    if (!isEmailValid(email)) {
      toast.error('Correo no válido');
      return false;
    }
    if (!isPasswordValid(password)) {
      toast.error('Contraseña no válida');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    
    if (!validateLoginParams()) return;

    try {
      await login(email, password);
      navigateTo('/dashboard');
    } catch (error) {
        console.error('An error has ocurred trying to login:', error);
        toast.error(errorHandler(error));
    }

  }

  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={0} sm={0} md={7} lg={6} className="imageColumnLogin" style={{ 
  backgroundImage: 'url("/utils/Intersect1.webp")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
       }}>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={6}>
        <Box
          width={{ xs: '90%', sm: '65%', md: '90%', lg: '65%' }}
          margin="0 auto"
          sx={{position:"relative", height:"100%"}}
        >
        <Box
          component="img"
          alt="The house from the offer."
    src="/utils/Asadosdelamontaña.png"
          width={{ xs: '200px', sm: '225px', md: '225px', lg: '250px' }}
          margin="40px auto 40px auto">
        </Box>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className="iconLogin" sx={{color:'#cdcdcd'}}/>
              </InputAdornment>
            ),
            style: { color: '#fff' },
          }}
          margin="normal"
          required
          placeholder="Correo electrónico"
          name="username"
          autoComplete="username"
          className="inputLogin"
          id="email"
          sx={{
            borderRadius: "32.5px",
            width: "100%",
            height: "auto",
            background: "#575756",
            "& fieldset": { border: "none"},
            padding: "5px 0px",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon className="iconLogin" sx={{color:'#cdcdcd'}}/>
              </InputAdornment>
            ),
            style: { color: '#fff'},
          }}
          margin="normal"
          required
          name="password"
          placeholder="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{
            borderRadius: "32.5px",
            width: "100%",
            height: "auto",
            background: "#575756",
            "& fieldset": { border: "none" },
            padding: "5px 0px",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          id="signIn"
          style={{ borderRadius: "32.5px", height: "66px", width: "100%" }}
          onClick={()=> handleLogin()}
          >
            Iniciar Sesión
          </Button>
          <Box>
            <Link href="#" variant="body2" id="forgotPassword">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <Box display={"flex"}
          sx={{
            position:"absolute",
            bottom:"15px",
            right:{xs:"50%", sm:"50%", md:"0%", lg:"0%"},
            transform: {xs:"translateX(50%)",  sm:"translateX(50%)", md:"translateX(0%)", lg:"translateX(0%)"}
          }}
          >
            <Link href="#" target="_blank" rel="noopener noreferrer"
            sx={{padding:"0px 5px",
                color:"#fff",
                '&:hover': {
                  color: "#F5A218"
                },
              }}>
                <FacebookIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer"
            sx={{padding:"0px 5px",
                color:"#fff",
                '&:hover': {
                  color: "#F5A218"
                },
              }}>
                <WhatsAppIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer"
            sx={{padding:"0px 5px",
                color:"#fff",
                '&:hover': {
                  color: "#F5A218"
                },
              }}>
                <TwitterIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer"
            sx={{padding:"0px 5px",
                color:"#fff",
                '&:hover': {
                  color: "#F5A218"
                },
              }}>
                <InstagramIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer"
            sx={{padding:"0px 5px",
                color:"#fff",
                '&:hover': {
                  color: "#F5A218"
                },
              }}>
                <YouTubeIcon sx={{ fontSize: 25 }} />
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
