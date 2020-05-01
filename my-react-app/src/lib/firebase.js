// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
var firebaseConfig = {
    apiKey: "AIzaSyB4LHb6dMcwCVcW_h7OzaxPIkoub-aXROo",
    authDomain: "mr36-b6ccd.firebaseapp.com",
    databaseURL: "https://mr36-b6ccd.firebaseio.com",
    projectId: "mr36-b6ccd",
    storageBucket: "mr36-b6ccd.appspot.com",
    messagingSenderId: "1087220595198",
    appId: "1:1087220595198:web:7dd28316b778927ffaa8af",
    measurementId: "G-7WP7NVBDR3"
  };

let fb = firebase.initializeApp(firebaseConfig);

export default fb;
