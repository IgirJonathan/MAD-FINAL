// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdVlfEO6ZR4WkE8BWf5bEJOgrGu63j2KY",
  authDomain: "e-laundry-c8d79.firebaseapp.com",
  projectId: "e-laundry-c8d79",
  storageBucket: "e-laundry-c8d79.firebasestorage.app",
  messagingSenderId: "814405434876",
  appId: "1:814405434876:web:e60ddbb7947016f27ec679",
  databaseURL : 'https://e-laundry-c8d79-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;