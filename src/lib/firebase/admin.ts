// src/lib/firebase/admin.ts
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PROJECT_ID
} from '$env/static/private';

function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0]!;
  }

  return initializeApp({
    credential: cert({
      privateKey: FIREBASE_PRIVATE_KEY,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      projectId: FIREBASE_PROJECT_ID
    }),
    databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

export const firebase = makeApp();
export const auth = getAuth(firebase);
