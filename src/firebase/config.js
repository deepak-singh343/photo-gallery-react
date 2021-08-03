import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCnAc9cHwoJVZ0venYfLXmWmx5kWCtTPVc",
    authDomain: "my-photo-studio.firebaseapp.com",
    projectId: "my-photo-studio",
    storageBucket: "my-photo-studio.appspot.com",
    messagingSenderId: "836685755053",
    appId: "1:836685755053:web:35904c0e0014d1ce434c24",
    measurementId: "G-GW9DKMRQNG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore=firebase.firestore();
  const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

  export {
      projectFirestore,
      projectStorage,
      timeStamp
  }