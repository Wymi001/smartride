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
