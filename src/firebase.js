import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBvnJVVkw6cx6HCD85wN3MbMj0lrU4SKkA",
    authDomain: "messanging-app-66517.firebaseapp.com",
    projectId: "messanging-app-66517",
    storageBucket: "messanging-app-66517.appspot.com",
    messagingSenderId: "781332110287",
    appId: "1:781332110287:web:4fca9dfba322d2b00990ba",
    measurementId: "G-L5KX16WFZ6"

    });

    const db = firebaseApp.firestore();

    export default db;