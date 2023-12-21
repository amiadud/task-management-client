// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj2z83dU5kQ0DRJyCXhQtjU4O7UyrORDI",
  authDomain: "task-management-41f6d.firebaseapp.com",
  projectId: "task-management-41f6d",
  storageBucket: "task-management-41f6d.appspot.com",
  messagingSenderId: "1063043423808",
  appId: "1:1063043423808:web:3f30099d89ac660aea09a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;