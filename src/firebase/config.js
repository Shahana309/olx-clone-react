import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCqUbofBAlrC_NMzk3BFhueiGzaOpimJN4",
    authDomain: "myolx-dcf7c.firebaseapp.com",
    projectId: "myolx-dcf7c",
    storageBucket: "myolx-dcf7c.appspot.com",
    messagingSenderId: "960762115722",
    appId: "1:960762115722:web:bef86a1282321e3cf1df73",
    measurementId: "G-2NRS5YPY4K"
  };

export default firebase.initializeApp(firebaseConfig);