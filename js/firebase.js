import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfo_F1LjkftTydlWxjErNOdYG4f6x31yU",
  authDomain: "office-bid.firebaseapp.com",
  projectId: "office-bid",
  storageBucket: "office-bid.appspot.com",
  messagingSenderId: "996442738186",
  appId: "1:996442738186:web:db0b6a602e31e6cb01d9f3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
