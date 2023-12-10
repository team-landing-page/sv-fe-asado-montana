import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import './Login.css'

const imageURL = "src/features/login/utils/bg-login.jfif";

export default function LogIn() {
  return (
    <Box className="containerLogin" >
      <Box className="firstColumnLogin" flex={{ xs: 0, sm: 6, lg: 6 }} >
        <Box
          className="bg-login"
          component="img"
          alt="The house from the offer."
          src="src/features/login/utils/Intersect.png"
        ></Box>
      </Box>
      <Box flex={{ xs: 12, sm: 6, lg: 6 }}>
        <Grid
          container
          className="containerForm"
        >
          <Grid lg={12} className="rowLogo">
            <Box
              component="img"
              alt="The house from the offer."
              src="src/features/login/utils/Asadosdelamontaña.png"
            ></Box>
          </Grid>
          <Grid lg={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon className="iconLogin"/>
                  </InputAdornment>
                ),
              }}
              margin="normal"
              required
              placeholder="Nombre de usuario"
              name="username"
              autoComplete="username"
              className="inputLogin"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon className="iconLogin"/>
                  </InputAdornment>
                ),
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
                width: "384px",
                height: "65px",
                background: "#575756",
                "& fieldset": { border: "none" },
              }}
            />
          </Grid>
          <Grid xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="signIn"
              style={{ borderRadius: "32.5px", height: "65px", width: "384px" }}
            >
              Iniciar Sesión
            </Button>
          </Grid>
          <Grid xs={12}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
