 
 import firebase from 'firebase/compat/app';
 import "firebase/compat/auth";
 import "firebase/compat/firestore";
 
 
 const firebaseConfig = {
    
    apiKey: "AIzaSyDUtb3DvRjY95n4K6i6wNqS0WIVMwgYArA",
    authDomain: "chat-app-777d1.firebaseapp.com",
    projectId: "chat-app-777d1",
    storageBucket: "chat-app-777d1.appspot.com",
    messagingSenderId: "419640969849",
    appId: "1:419640969849:web:35b0a0de72bd3ced5462a8",

};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
