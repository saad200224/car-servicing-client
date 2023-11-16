// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

  // apiKey: "AIzaSyDURlbvIWReOrk1rONTKrjmHhP4fKwgECo",
  // authDomain: "cars-doctor-61065.firebaseapp.com",
  // projectId: "cars-doctor-61065",
  // storageBucket: "cars-doctor-61065.appspot.com",
  // messagingSenderId: "37539343754",
  // appId: "1:37539343754:web:aeaa92dff3bea641b56c73"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;