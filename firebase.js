// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1xKFUK9y5fTakbgK66oSv9RceN0O0gtI",
  authDomain: "rn-uber-eats-clone-6355c.firebaseapp.com",
  projectId: "rn-uber-eats-clone-6355c",
  storageBucket: "rn-uber-eats-clone-6355c.appspot.com",
  messagingSenderId: "405346167927",
  appId: "1:405346167927:web:9aa5cfca415688e84c2a72"
};

let firebaseApp = initializeApp(firebaseConfig);
//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebaseApp