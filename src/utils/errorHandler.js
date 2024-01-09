
const errorMessages = [
    {id: 'auth/invalid-credential', message: 'usuario o contraseña inccorectos'},
    
]

const errorHandler = (error) => {
    const { message, code } = error;
    if (message) {
        const errorMessage = errorMessages.filter(errorItem => errorItem.id === code);
        if (errorMessage.length > 0) return errorMessage[0].message;
    }

}

export {
    errorHandler
}