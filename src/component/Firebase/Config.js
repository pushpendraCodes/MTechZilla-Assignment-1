import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtYGaqoezfbzMUGz0MbDfjXqtWsdKrwug",
    authDomain: "pomodoro-app-2e234.firebaseapp.com",
    projectId: "pomodoro-app-2e234",
    storageBucket: "pomodoro-app-2e234.appspot.com",
    messagingSenderId: "699027744084",
    appId: "1:699027744084:web:556c2af4ab737a8c8954c1",
    measurementId: "G-5RJB3EPLTX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  export {auth,provider};