import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyNwS3ojM9ZqJg-JSuRrX9nzFl3WnR0KI",
  authDomain: "crwn-clothing-c610f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-c610f.firebaseio.com",
  projectId: "crwn-clothing-c610f",
  storageBucket: "crwn-clothing-c610f.appspot.com",
  messagingSenderId: "548255039872",
  appId: "1:548255039872:web:f18082abdba61c43e20165",
  measurementId: "G-EWXX89QDEQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
