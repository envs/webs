import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvk0EJbfmGxQHHLu6a3v4OZWcr5n9LDyg",
    authDomain: "meetapp-15515.firebaseapp.com",
    databaseURL: "https://meetapp-15515.firebaseio.com",
    projectId: "meetapp-15515",
    storageBucket: "meetapp-15515.appspot.com",
    messagingSenderId: "687542959481",
    appId: "1:687542959481:web:428f83ba898dbd555403a8",
    measurementId: "G-64DF9X7B2Q"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;