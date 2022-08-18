import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVz_qKFVBAZFoGdTfOsAQ7v-bahEQCEpQ",
  authDomain: "drariela-dupre-a65f7.firebaseapp.com",
  projectId: "drariela-dupre-a65f7",
  storageBucket: "drariela-dupre-a65f7.appspot.com",
  messagingSenderId: "94877507704",
  appId: "1:94877507704:web:07927f32bdf0daa5fa4d8d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);