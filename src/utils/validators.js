export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPasswordValid = (password) => {
    return password.length >= 6;
};

export const validateEnvs = (config) => {
    // add required environment variables to avoid loss
    // of any variable in every stage or for any developer.
    const requiredKeys = [
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_PROJECT_ID',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGE_SENDER_ID',
      'FIREBASE_APP_ID',
    ];
  
    for (const key of requiredKeys) {
      if (!(key in config) || !config[key]) {
        throw new Error(`Variable ${key} is not defined`);
      }
    }
  
    return true;
  };