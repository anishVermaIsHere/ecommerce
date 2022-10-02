import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhSqZJskwqWmN48J2mwp9vWwgj40277NY",
    authDomain: "ecomm-store-22.firebaseapp.com",
    projectId: "ecomm-store-22",
    storageBucket: "ecomm-store-22.appspot.com",
    messagingSenderId: "841443435448",
    appId: "1:841443435448:web:c1e139637ba86cd11d654d",
    measurementId: "G-THND16L8TM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();





