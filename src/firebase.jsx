// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpouDdnmM7xDR9s7hjP4A10QbS1CFzvF8",
    authDomain: "disney-plus-clone-8b437.firebaseapp.com",
    projectId: "disney-plus-clone-8b437",
    storageBucket: "disney-plus-clone-8b437.appspot.com",
    messagingSenderId: "1019036578755",
    appId: "1:1019036578755:web:389320aa6e87857ef10376"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;