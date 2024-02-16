import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { theme } from "./utils/LightTheme";
import { router } from "./router/router";
import { AuthProvider } from "./context/authContext";
import { FirestoreProvider } from "./context/firestoreContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <FirestoreProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </FirestoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
