import { PUBLIC_FIREBASE_API_KEY } from '$env/static/public';
import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: 'sveltekit-firebase-auth-1ac2b.firebaseapp.com',
  projectId: 'sveltekit-firebase-auth-1ac2b',
  storageBucket: 'sveltekit-firebase-auth-1ac2b.appspot.com',
  messagingSenderId: '620145846304',
  appId: '1:620145846304:web:2a253c998e8aa363c7f445'
};

function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0]!;
  }

  return initializeApp(firebaseConfig);
}

export const app = makeApp();
export const auth = getAuth(app);
