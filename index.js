// function toCelsius(fahrenheit){
//  return (5/9) * (fahrenheit-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);
  // 

// SHOW NAV LINKS AFTER CLICKING
function showLinks() {
  document.getElementById ("openIcon").style.display = "none";
  document.getElementById("navLinks").style.display = "block";
  document.getElementById ("navLinks").style.marginTop = "0";
  document.getElementById("closeIcon").style.display = "block";
}
// HIDE NAV LINKS AFTER CLICKING
function hideLinks() {
  document.getElementById("navLinks").style.display = "none";
  document.getElementById("closeIcon").style.display = "none";
  document.getElementById ("openIcon").style.display = "block";
}

// REVEAL AND HIDE SUB-MENU
function revealSubLinks() {
  document.getElementById("transport").style.display = "block";
}
function hideSubLinks() {
  document.getElementById("transport").style.display = "none";
}
function hideSubLink() {
  document.getElementById("transport").style.display = "none";
}
function closeNav() {
  document.getElementById("transport").style.display = "none";
}

function displayOptions(){
  document.getElementById('dropdown-trip').style.display = 'block';
}
