import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCMiGBXpv-sBvYY93ri3wDgETiJJBH04tw",
    authDomain: "quickmart-d8164.firebaseapp.com",
    projectId: "quickmart-d8164",
    storageBucket: "quickmart-d8164.appspot.com",
    messagingSenderId: "764348517814",
    appId: "1:764348517814:web:62cbf7ba431a45033ac517",
    measurementId: "G-Y2D10E0Y76"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };