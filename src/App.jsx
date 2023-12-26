import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import './App.css'
import { theme } from "./utils/LightTheme";
import { router } from './router/router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider 
        router={router}
      />
    </ThemeProvider>
  );
}
