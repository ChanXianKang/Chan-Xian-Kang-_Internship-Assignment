// firebase/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhTw86GVGlsXmYkvWEZmtrrXKOWMNLe8s",
  authDomain: "database-intern.firebaseapp.com",
  projectId: "database-intern",
  storageBucket: "database-intern.appspot.com",
  messagingSenderId: "908483294915",
  appId: "1:908483294915:web:a48bb7c3813390cf709476",
  measurementId: "G-T93PLPMN4L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
