// Import the functions you need from the SDKs you need
"use client";
import { Session } from 'next-auth';
import {getApp , getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, User, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
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
const auth = getAuth();


// const [user, setUser] = useState<User | null>(null);


// export const authHandler = async (user: { displayName: any; email: any; } | undefined) => {
//   const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour from now

//   // Create a Session object
//   const session = {
//     user: {
//       name: user?.displayName,
//       email: user?.email,
//       // ... other user properties
//     },
//     expires: expirationTime,
//   };

//   return session;
// }

const authSignHandler = async() => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider);

    
}

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth ,(currentUser) => setUser(currentUser));

//   return () => unsubscribe();
// }, [user])




export { db , auth ,authSignHandler } ;

