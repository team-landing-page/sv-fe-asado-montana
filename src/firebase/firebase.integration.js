/**
Desarollador: Jorge Romero
Fecha de creación: 14/12/2023
Fecha de modificación: 15/12/2023
Descripción: Se inicializan las configuraciones de Firebase con el aplicativo.
*/

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export class FirebaseAdapter {
  static app;
  constructor(firebaseConfig) {
    if (!this.app) {
      const {
        FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN,
        FIREBASE_PRJECT_ID,
        FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGE_SENDER_ID,
        FIREBASE_APP_ID,
      } = firebaseConfig;
      this.app = initializeApp({
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        projectId: FIREBASE_PRJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
        appId: FIREBASE_APP_ID,
      });
    }
  }

  getAuthentication() {
    if (!this.app) throw new Error('App is undefined');
    return getAuth(this.app);
  }

}