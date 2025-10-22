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

// Admin.js (client)
document.getElementById('goToSignUp').addEventListener('click', () => {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('signUpPage').style.display = 'block';
});
document.getElementById('backToLogin').addEventListener('click', () => {
  document.getElementById('signUpPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
});

// Sign up
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = { email: form.email.value, password: form.password.value };

  const resp = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const j = await resp.json();
  if (resp.ok) {
    alert('Account created! You can now log in.');
    document.getElementById('backToLogin').click();
  } else {
    alert(j.error || 'Signup failed');
  }
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = { email: form.email.value, password: form.password.value };

  const resp = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const j = await resp.json();
  if (resp.ok) {
    alert('Logged in as ' + j.email);
    // TODO: set cookie / redirect to protected page
  } else {
    alert(j.error || 'Login failed');
  }
});
