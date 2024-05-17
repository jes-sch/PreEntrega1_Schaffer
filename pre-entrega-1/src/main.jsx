import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdObuWHe-35sb2Rteffrgn_5ICXP2BRs",
  authDomain: "tienda-de-lari.firebaseapp.com",
  projectId: "tienda-de-lari",
  storageBucket: "tienda-de-lari.appspot.com",
  messagingSenderId: "35580614923",
  appId: "1:35580614923:web:fca58512450a0712372a0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
