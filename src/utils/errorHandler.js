
const errorMessages = [
    {id: 'auth/invalid-credential', message: 'Usuario o contraseña incorrectos'},
    {id: 'auth/user-not-found', message: 'Usuario no encontrado'},
    {id: 'auth/wrong-password', message: 'Contraseña incorrecta'},
    {id: 'auth/email-already-in-use', message: 'El correo electrónico ha sido registrado'},
    {id: 'auth/invalid-email', message: 'Correo no válido'},
    {id: 'auth/popup-closed-by-user', message: 'Inicio de sesión incompleto'},
    {id: 'auth/account-exists-with-different-credential', message: 'Credenciales de cuenta no coinciden'},
    {id: 'auth/network-request-failed', message: 'Error de red'},

]

const errorHandler = (error) => {
    const { message, code } = error;
    if (message) {
        const errorMessage = errorMessages.filter(errorItem => errorItem.id === code);
        if (errorMessage.length > 0) return errorMessage[0].message;
    }
    else return 'Oops, algo salió mal\nintenta de nuevo más tarde';
}

export {
    errorHandler
}