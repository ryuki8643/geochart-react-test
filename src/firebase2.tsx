// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC04w9egokL9tYPGerCPgrl45u2ZlaWngk",
    authDomain: "gdsc-keio-solution2.firebaseapp.com",
    databaseURL: "https://gdsc-keio-solution2-default-rtdb.firebaseio.com",
    projectId: "gdsc-keio-solution2",
    storageBucket: "gdsc-keio-solution2.appspot.com",
    messagingSenderId: "799528708864",
    appId: "1:799528708864:web:ed985380233e74f44e21e5",
    measurementId: "G-X058RR7GVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
