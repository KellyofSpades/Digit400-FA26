window.addEventListener("DOMContentLoaded", simple, false);

function simple() {
  alert("Kaboom, Master coder");
  var buttons = document.getElementsByTagName("button");
  buttons[0].addEventListener("click", changeColor, false);
  buttons[1].addEventListener("click", changeColor2, false);
}

function changeColor() {
  var p1 = document.getElementById("switchColor");
  {
    p1.style.color = "red";
  }
}

function changeColor2() {
  alert("What the heck is happening?");
  var allParagraphs = document.getElementsByTagName("p");
  for (var i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "blue";
  }
}
