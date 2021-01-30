import firebase from "firebase/app";

//the firebase underneath refers to the firebase/app as shown above
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiA7nGFjnba00RslgLcOCuahV7ePQIESY",
  authDomain: "annapurna-db.firebaseapp.com",
  projectId: "annapurna-db",
  storageBucket: "annapurna-db.appspot.com",
  messagingSenderId: "793229492272",
  appId: "1:793229492272:web:01667d672a777ca0e32df5",
  measurementId: "G-N5XWLT810P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
