// Load JS only after the page has fully loaded
window.onload = function () {
  const loginPage = document.getElementById("loginPage");
  const signUpPage = document.getElementById("signUpPage");

  const goToSignUp = document.getElementById("goToSignUp");
  const backToLogin = document.getElementById("backToLogin");

  // Default: show login page
  loginPage.style.display = "flex";
  signUpPage.style.display = "none";

  // Go to Sign Up
  goToSignUp.addEventListener("click", () => {
    loginPage.style.display = "none";
    signUpPage.style.display = "flex";
  });

  // Back to Login
  backToLogin.addEventListener("click", () => {
    signUpPage.style.display = "none";
    loginPage.style.display = "flex";
  });
};
