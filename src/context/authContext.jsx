/**
Desarollador: Jorge Romero
Fecha de creación: 14/12/2023
Fecha de modificación: 15/12/2023
Descripción: Funciones para el registro e inicio de sesión con Firebase.
*/
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import PropTypes from "prop-types";

import { auth } from "../firebase/firebase.integration";
import { isEmailValid, isPasswordValid } from "../utils/validators";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log('no hay usuario suscrito');
        setUser({});
        setLoading(false);
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const register = async (email, password) => {
    if (!isEmailValid(email)) {
      console.error('El formato de correo electrónico no es válido');
      return;
    }

    if (!isPasswordValid(password)) {
      console.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };

  const login = async (email, password) => {
    if (!isEmailValid(email)) {
      console.error('El formato de correo electrónico no es válido');
      return; // Detener la solicitud si el formato de correo no es válido
    }
    const response = await signInWithEmailAndPassword(auth, email, password);
    setUser(response);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      console.error('An error has ocurred trying to logout', error.message);
      throw new Error(error.message); 
    }
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
export { AuthProvider };
