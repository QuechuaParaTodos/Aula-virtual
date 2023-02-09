// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
// import 'firebase/database';
// import 'firebase/firebase-database';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Lz8WmseGo_luwHUdJLsomncZk75u-B0",
  authDomain: "quechua-para-todos.firebaseapp.com",
  projectId: "quechua-para-todos",
  storageBucket: "quechua-para-todos.appspot.com",
  messagingSenderId: "73137292194",
  appId: "1:73137292194:web:43b9971cbe6ff6d76de8fb",
  measurementId: "G-RCM4J6Z7XR"
};

// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
export default firebaseApp;
// export const analytics = getAnalytics(app);
