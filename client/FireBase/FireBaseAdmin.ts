import admin from 'firebase-admin';
import { getApps } from 'firebase/app';

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string 
);

if(!getApps().length){
    admin.initializeApp({
        credential : admin.credential.cert(serviceAccount),
    },)
}


const adminDB = admin.firestore();


export {adminDB} ;



// import admin from 'firebase-admin';
// import { FirebaseApp, getApp, initializeApp } from 'firebase/app';

// const serviceAccount = JSON.parse(
//     process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// );

// const appName = 'maya__admin';

// let firebaseApp: FirebaseApp | undefined;

// try {
//     // Try to get the existing app by name
//     firebaseApp = getApp(appName) as FirebaseApp;
// } catch (error) {
//     // If the app does not exist, initialize it
//     firebaseApp = initializeApp({
//         credential: admin.credential.cert(serviceAccount),
//     }, appName) as FirebaseApp;
// }

// const adminDB = firebaseApp.firestore();

// export { adminDB };
