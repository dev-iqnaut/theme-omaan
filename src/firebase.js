// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEk25lEdB4nnD6fY-XQgC15IqKNLV15is",
    authDomain: "school-web-8909b.firebaseapp.com",
    projectId: "school-web-8909b",
    storageBucket: "school-web-8909b.appspot.com",
    messagingSenderId: "133066455318",
    appId: "1:133066455318:web:d7613752240bbd5a42f837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };