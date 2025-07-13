import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDTy6ixRgjUgl8PkX8d28gGr7AQYl3HMTc",
    authDomain: "e-commerce-785f9.firebaseapp.com",
    projectId: "e-commerce-785f9",
    storageBucket: "e-commerce-785f9.firebasestorage.app",
    messagingSenderId: "308312445882",
    appId: "1:308312445882:web:debf1a869bbae93b674383",
    measurementId: "G-CJGNC6Q2LJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);