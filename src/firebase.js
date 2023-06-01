import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAtP80irgVeiIF6ITLL9XAdzllngG1kcoI",
  authDomain: "auth-e3d2d.firebaseapp.com",
  projectId: "auth-e3d2d",
  storageBucket: "auth-e3d2d.appspot.com",
  messagingSenderId: "1004020736545",
  appId: "1:1004020736545:web:7ac6d239a7aae32657f960",
  measurementId: "G-12DB8XLGFP"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
