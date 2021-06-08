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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
