import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/LightTheme";
import LogIn from './features/login/views/Login/LoginView';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LogIn></LogIn>
    </ThemeProvider>
  );
}
