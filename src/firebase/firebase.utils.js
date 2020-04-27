import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuZLNlo5q-LW0Ls_jMx4lWiuJ0fHg9Ttc",
    authDomain: "crwn-db-c482a.firebaseapp.com",
    databaseURL: "https://crwn-db-c482a.firebaseio.com",
    projectId: "crwn-db-c482a",
    storageBucket: "crwn-db-c482a.appspot.com",
    messagingSenderId: "1049295310533",
    appId: "1:1049295310533:web:5b4dcca8881065b26caaac",
    measurementId: "G-TE6F8GTH03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

