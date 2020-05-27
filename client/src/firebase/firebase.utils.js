import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

// const API_KEY = process.env.REACT_APP_API_KEY

const config = {
    apiKey: "AIzaSyDuZLNlo5q-LW0Ls_jMx4lWiuJ0fHg9Ttc",
    authDomain: "crwn-db-c482a.firebaseapp.com",
    // authDomain: API_KEY,
    databaseURL: "https://crwn-db-c482a.firebaseio.com",
    projectId: "crwn-db-c482a",
    storageBucket: "crwn-db-c482a.appspot.com",
    messagingSenderId: "1049295310533",
    appId: "1:1049295310533:web:5b4dcca8881065b26caaac",
    measurementId: "G-TE6F8GTH03"
};

//userAuth passed on from ComponentDidMount using .onAuthStateChanged()
export const createUserProfileDocument = async (userAuth, additionalData) => {

    //check is not null
    if (!userAuth) return;

    //reference a collection using firestore.doc(collection/documentID) - in this example the collection is users -- .doc check if it exists, and perform CRUD -DOCUMENTS
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    //.collection reference the collection itself - queries the collection
    // const collectionRef = firestore.collection('users');

    //READ the snapshot property of the userRef using .get() -- check if object returns exists: true
    const snapShot = await userRef.get();
    // console.log(snapShot);

    /////////////////////CHECK IF IT EXISTS//////////////////////////
    ////////////////////using .get(), if it doesnt, CREATE by .set()////////////////

    //if it doesn't exist, create
    //after GET using .get() -- if it returns exists: false -- CREATE using documentReference - set()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    /////////////////AFTER THIS LINE, IT WILL BE CREATED, HENCE EXISTS/////////////////////

    //////////////////////////IF IT EXISTS, GO STRAIGHT HERE///////////////////////
    //return userRef after setting if exists, returns the userRef from firestore.doc()
    return userRef;

}

firebase.initializeApp(config);

export const convertCollectionSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data();


        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

};

export const getCurrentuser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

