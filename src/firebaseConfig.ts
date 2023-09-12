// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'logbook-44134.firebaseapp.com',
  projectId: 'logbook-44134',
  storageBucket: 'logbook-44134.appspot.com',
  messagingSenderId: '889151765527',
  appId: '1:889151765527:web:c27dbd3d691a754c21b052',
  measurementId: 'G-20E5V5RNWL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: extends analytics capability from this
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
