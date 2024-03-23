export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPasswordValid = (password) => {
    return password.length >= 6;
};

export const validateEnvs = (config) => {
    // add required envs to validate for other developers
    const requiredKeys = [
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_PROJECT_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGE_SENDER_ID',
      'FIREBASE_APP_ID',
    ];
  
    // Check if all required keys are present and have non-empty values
    for (const key of requiredKeys) {
      if (!(key in config) || !config[key]) {
        console.error(`Variable ${key} is not defined`);
      }
    }
  
    return true;
  };