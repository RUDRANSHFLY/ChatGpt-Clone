// Import the functions you need from the SDKs you need
import {getApp , getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2qLT8yBzAa5Pj8EQ2lBdlkYkiOjGcCA",
  authDomain: "samay-cc7b4.firebaseapp.com",
  projectId: "samay-cc7b4",
  storageBucket: "samay-cc7b4.appspot.com",
  messagingSenderId: "688576514772",
  appId: "1:688576514772:web:466670db305a989dd20941"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);



export { db } ;

