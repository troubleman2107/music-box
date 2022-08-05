import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
   apiKey: "AIzaSyDjyz9y3mexwyu0qEgJyNt9oSWqBfD6dR0",
   authDomain: "music-box-e0ad1.firebaseapp.com",
   projectId: "music-box-e0ad1",
   storageBucket: "music-box-e0ad1.appspot.com",
   messagingSenderId: "967185467769",
   appId: "1:967185467769:web:a39741a88d8d4494f347a8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
