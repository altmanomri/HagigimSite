import firebase from 'firebase/app';
// require("firebase/firestore");
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACUP05MKK8ZvBtJ0bgK2ZAwMfTCY3V3Xk",
    authDomain: "hagigim-23284.firebaseapp.com",
    projectId: "hagigim-23284",
    storageBucket: "hagigim-23284.appspot.com",
    messagingSenderId: "1075500856466",
    appId: "1:1075500856466:web:550a13e1bd71115f41a24b",
    measurementId: "G-8FS4KDSFRK"
  };

  firebase.initializeApp(firebaseConfig);
  
  // export const auth = firebase.auth();
  // export const firestore = firebase.firestore;
  // export default db;
  export default firebase;