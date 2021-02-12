import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp({
    apiKey            : "AIzaSyCNzfBz3Fyomfq8HJwFiOCbmdWnaaUuBvI",
    authDomain        : "journal-app-10246.firebaseapp.com",
    projectId         : "journal-app-10246",
    storageBucket     : "journal-app-10246.appspot.com",
    messagingSenderId : "287176165852",
    appId             : "1:287176165852:web:f1ffc216a4674148886719"
})

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
