const errorMessages = [
  {
    id: "auth/invalid-credential",
    message: "Usuario o contraseña incorrectos",
  },
  { id: "auth/user-not-found", message: "Usuario no encontrado" },
  { id: "auth/wrong-password", message: "Contraseña incorrecta" },
  {
    id: "auth/email-already-in-use",
    message: "El correo electrónico ha sido registrado",
  },
  { id: "auth/invalid-email", message: "Correo no válido" },
  { id: "auth/popup-closed-by-user", message: "Inicio de sesión incompleto" },
  {
    id: "auth/account-exists-with-different-credential",
    message: "Credenciales de cuenta incorrectas",
  },
  { id: "auth/network-request-failed", message: "Error de red" },
  { id: "ABORTED", message: "Operación abortada" },
  { id: "ALREADY_EXISTS", message: "El documento ya existe" },
  {
    id: "DEADLINE_EXCEEDED",
    message:
      "El servidor de Cloud Firestore que maneja la solicitud excedió la fecha límite.",
  },
  {
    id: "FAILED_PRECONDITION",
    message:
      "La operación no se puede realizar en el estado actual del sistema",
  },
  { id: "INTERNAL", message: "Error interno" },
  { id: "INVALID_ARGUMENT", message: "Argumento no válido" },
  { id: "NOT_FOUND", message: "No encontrado" },
  {
    id: "PERMISSION_DENIED",
    message: "No se tiene permiso para realizar esta acción",
  },
  { id: "RESOURCE_EXHAUSTED", message: "Recursos agotados" },
  { id: "UNAUTHENTICATED", message: "No autenticado" },
  { id: "UNAVAILABLE", message: "Servicio no disponible" },
  { id: "ERR_NETWORK", message: "Error en la red" },
  {
    id: "net::ERR_NAME_NOT_RESOLVED",
    message: "Error de resolución de nombre de red",
  },
];

const errorHandler = (error) => {
  const { message, code } = error;
  if (message) {
    const errorMessage = errorMessages.filter(
      (errorItem) => errorItem.id === code
    );
    if (errorMessage.length > 0) return errorMessage[0].message;
  } else return "Oops, algo salió mal\nintenta de nuevo más tarde";
};

const codeErrorHandler = (code) => {
  if (code && code !== "") {
    const error = errorMessages.find((errorItem) => errorItem.id === code);
    if (error) return error.message;
  }
  return "Oops, algo salió mal\nintenta de nuevo más tarde";
};

export { errorHandler, codeErrorHandler };
