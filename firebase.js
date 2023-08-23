// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app' 
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ugZqNhco828Iqr9PxdAkX4h3LAj5ykw",
  authDomain: "senior-289d1.firebaseapp.com",
  projectId: "senior-289d1",
  storageBucket: "senior-289d1.appspot.com",
  messagingSenderId: "626412739426",
  appId: "1:626412739426:web:c504598b7f24cc80e86a3b"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {app , firebase , db, auth, storage};
