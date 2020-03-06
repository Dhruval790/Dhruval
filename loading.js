// Code goes here

function mfunction() {
  setTimeout(func2, 3000);
}
function func2() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("home").style.display = "block";
}
