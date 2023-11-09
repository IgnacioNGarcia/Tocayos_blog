  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBlyoNp3HPYQPIddyHGEXOcVEG224oMcE",
    authDomain: "tocayos-blog-bbdd.firebaseapp.com",
    projectId: "tocayos-blog-bbdd",
    storageBucket: "tocayos-blog-bbdd.appspot.com",
    messagingSenderId: "142534376172",
    appId: "1:142534376172:web:fa36e757a1e3a3add4c3c9",
    measurementId: "G-GPQ4HGLB0T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
