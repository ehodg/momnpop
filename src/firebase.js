// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7-Ywcnc5s2sCQmqbHNi1jXCtb79RmnFg",
    authDomain: "momnpop-43a1f.firebaseapp.com",
    projectId: "momnpop-43a1f",
    storageBucket: "momnpop-43a1f.appspot.com",
    messagingSenderId: "378588816288",
    appId: "1:378588816288:web:1e3857ee10ae32e7babac5",
    measurementId: "G-DXY4QJD7Z7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 