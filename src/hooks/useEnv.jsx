
const useEnv = () => {
    // TODO: test this!!!!
  return {
    FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PRJECT_ID: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    FIREBASE_MESSAGE_SENDER_ID: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 
  };
}

export default useEnv