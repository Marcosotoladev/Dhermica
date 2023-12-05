
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBkIA1iDoDhLmyp9bIDKl4MHLrRX-CDgh4",
    authDomain: "dhermicaestetica.firebaseapp.com",
    projectId: "dhermicaestetica",
    storageBucket: "dhermicaestetica.appspot.com",
    messagingSenderId: "558318533556",
    appId: "1:558318533556:web:a64046d01548fafef990e1",
    measurementId: "G-NBFXK9NV2M"
  };

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
export const auth = fb.auth();