// Import the functions you need from the SDKs you need
import { initializeApp, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyBQlEX87KArEZnuIe0rbK9C5KOfUexgHOM',
  authDomain: 'kit-firebase-auth.firebaseapp.com',
  projectId: 'kit-firebase-auth',
  storageBucket: 'kit-firebase-auth.appspot.com',
  messagingSenderId: '510139843769',
  appId: '1:510139843769:web:ed7d6843a3a753d7774768',
  measurementId: 'G-WPZ51WP7Y9'
};

const createFirebaseApp = (config: FirebaseOptions) => {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
};

const app = createFirebaseApp(firebaseConfig);

export const auth = getAuth(app);
