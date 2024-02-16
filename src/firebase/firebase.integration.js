/**
Desarollador: Jorge Romero
Fecha de creación: 14/12/2023
Fecha de modificación: 15/12/2023
Descripción: Se inicializan las configuraciones de Firebase con el aplicativo.
*/

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  // apiKey: "AIzaSyC9qHs53-TbT66zAUU12DQb1ad0tPjDdqc",
  // authDomain: "sv-asado-montana.firebaseapp.com",
  // projectId: "sv-asado-montana",
  // storageBucket: "sv-asado-montana.appspot.com",
  // messagingSenderId: "734214845101",
  // appId: "1:734214845101:web:c7bf4083b8eb4623b94c24"
  apiKey: "AIzaSyBp-BFEvHhSm5dp6D6i84GfA4i_j5bTxMI",
  authDomain: "fe-asado-testing.firebaseapp.com",
  projectId: "fe-asado-testing",
  storageBucket: "fe-asado-testing.appspot.com",
  messagingSenderId: "715554547185",
  appId: "1:715554547185:web:8b6e26854bb4aaf05cd050"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);