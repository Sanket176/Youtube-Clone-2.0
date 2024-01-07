import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqTRn2ZoLz4uTLUwcJOvw4GTV_l4aieLg",
  authDomain: "yt-clone-d1f76.firebaseapp.com",
  projectId: "yt-clone-d1f76",
  storageBucket: "yt-clone-d1f76.appspot.com",
  messagingSenderId: "7447557928",
  appId: "1:7447557928:web:d2d7c0995518e83e89c21d",
  measurementId: "G-6559FMJM30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};