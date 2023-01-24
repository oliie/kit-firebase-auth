// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQlEX87KArEZnuIe0rbK9C5KOfUexgHOM',
  authDomain: 'kit-firebase-auth.firebaseapp.com',
  projectId: 'kit-firebase-auth',
  storageBucket: 'kit-firebase-auth.appspot.com',
  messagingSenderId: '510139843769',
  appId: '1:510139843769:web:ed7d6843a3a753d7774768',
  measurementId: 'G-WPZ51WP7Y9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
