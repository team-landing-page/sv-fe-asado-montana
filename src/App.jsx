import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { theme } from "./utils/LightTheme";
import { router } from "./router/router";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}
