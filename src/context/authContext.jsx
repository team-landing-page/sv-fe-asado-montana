/**
Desarollador: Jorge Romero
Fecha de creación: 14/12/2023
Fecha de modificación: 15/12/2023
Descripción: Funciones para el registro e inicio de sesión con Firebase.
*/

import {auth} from "../firebase/firebase.integration";
import { createContext, useContext, useEffect, useState } from "react";
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
    
	if(!context){
			console.error('error creando el contexto auth');
	}

  return context;
}

export function AuthProvider({children}){

  const [user, setUser] = useState('');

	useEffect( () => {
		const suscribed = onAuthStateChanged(auth, (currentUser)=>{
			if(!currentUser){
				console.log('no hay usuario suscrito');
				setUser('');
			} else {
				setUser(currentUser);
			}
		})

		return () => suscribed();
	}, [] )

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isPasswordValid = (password) => {
        return password.length >= 6;
    };

	const register = async (email, password) => {
		if (!isEmailValid(email)) {
			console.error('El formato de correo electrónico no es válido');
			return;
		}

		if (!isPasswordValid(password)) {
            console.error('La contraseña debe tener al menos 6 caracteres');
            return;
		}

		const response = await createUserWithEmailAndPassword(auth, email, password);
		console.log(response);
	};

	const login = async (email, password) => {
			if (!isEmailValid(email)) {
				console.error('El formato de correo electrónico no es válido');
				return; // Detener la solicitud si el formato de correo no es válido
			}

		const response = await signInWithEmailAndPassword(auth, email, password);
		console.log(response);
	};

    const logout = async () => {
			const response = await signOut(auth);
			console.log(response);
    }

    return <authContext.Provider
			value={{
				register,
				login,
				logout,
				user,
			}}
			>
      {children}
    </authContext.Provider>
}