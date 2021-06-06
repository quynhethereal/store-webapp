import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDpKsySWUd3fT4GmJf43h79f5wU6pIY9FE',
  authDomain: 'store-webapp-b8e95.firebaseapp.com',
  projectId: 'store-webapp-b8e95',
  storageBucket: 'store-webapp-b8e95.appspot.com',
  messagingSenderId: '1004718460196',
  appId: '1:1004718460196:web:a4141dbecf39f2919837b1',
  measurementId: 'G-HNVJG6DRNJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
