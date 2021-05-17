 import * as firebase from 'firebase';

 import 'firebase/storage';
 
 var firebaseConfig = {
    apiKey: "AIzaSyA9bf6Gm_1d4_ImgDQt6A9L289pI8gmmKU",
    authDomain: "appreservas-34d86.firebaseapp.com",
    projectId: "appreservas-34d86",
    storageBucket: "appreservas-34d86.appspot.com",
    messagingSenderId: "575621326850",
    appId: "1:575621326850:web:af4fce60dca2c19ebb9f1b",
    measurementId: "G-0KDZKFTBFN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const env = firebase.firestore();