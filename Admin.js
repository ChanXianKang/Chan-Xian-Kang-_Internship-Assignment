// // Load JS only after the page has fully loaded
// window.onload = function () {
//   const loginPage = document.getElementById("loginPage");
//   const signUpPage = document.getElementById("signUpPage");

//   const goToSignUp = document.getElementById("goToSignUp");
//   const backToLogin = document.getElementById("backToLogin");

//   // Default: show login page
//   loginPage.style.display = "flex";
//   signUpPage.style.display = "none";

//   // Go to Sign Up
//   goToSignUp.addEventListener("click", () => {
//     loginPage.style.display = "none";
//     signUpPage.style.display = "flex";
//   });

//   // Back to Login
//   backToLogin.addEventListener("click", () => {
//     signUpPage.style.display = "none";
//     loginPage.style.display = "flex";
//   });
// };


// Admin.js
import { app, auth, db } from "./firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

window.onload = function () {
  const loginPage = document.getElementById("loginPage");
  const signUpPage = document.getElementById("signUpPage");
  const goToSignUp = document.getElementById("goToSignUp");
  const backToLogin = document.getElementById("backToLogin");

  // Show login page by default
  loginPage.style.display = "flex";
  signUpPage.style.display = "none";

  goToSignUp.addEventListener("click", () => {
    loginPage.style.display = "none";
    signUpPage.style.display = "flex";
  });

  backToLogin.addEventListener("click", () => {
    signUpPage.style.display = "none";
    loginPage.style.display = "flex";
  });

  // ===== SIGN UP =====
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });
      alert("Sign-up successful!");
      loginPage.style.display = "flex";
      signUpPage.style.display = "none";
    } catch (error) {
      alert("Sign-up error: " + error.message);
    }
  });

  // ===== LOGIN =====
  const loginForm = document.querySelector('#loginPage form');
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back, " + userCredential.user.email + "!");
      // Redirect or show dashboard page
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
};

