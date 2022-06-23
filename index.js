// SHOW NAV LINKS AFTER CLICKING
function showLinks() {
  document.getElementById ("openIcon").style.display = "none";
  document.getElementById("closeIcon").style.display = "block";
  document.getElementById("navLinks").style.display = "block";
  document.getElementById ("navLinks").style.marginTop = "0";
}
// HIDE NAV LINKS AFTER CLICKING
function hideLinks() {
  document.getElementById("navLinks").style.display = "none";
  document.getElementById("closeIcon").style.display = "none";
  document.getElementById ("openIcon").style.display = "block";
}

const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-err-msg');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'Adeyemi' && password === 'wisdom123#') {
    alert('Welcome Adeyemi, You have successfully logged in');
  } else {
    loginErrorMsg.style.opacity = 1;
  }
})

// REVEAL AND HIDE SUB-MENU
// function revealSubLinks() {
//   document.getElementById("transport").style.display = "block";
// }
// function hideSubLinks() {
//   document.getElementById("transport").style.display = "none";
// }
// function hideSubLink() {
//   document.getElementById("transport").style.display = "none";
// }
// function closeNav() {
//   document.getElementById("transport").style.display = "none";
// }
