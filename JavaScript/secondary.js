window.addEventListener("DOMContentLoaded", init, false);

function init() {
  originalBackground = document.body.style.backgroundColor;
  var checkboxes = document.getElementsByTagName("input");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", toggleHighlight, false);
  }
}

var status = this.checked;
var spans = document.getElementsByClassName(pos);
for (var i = 0; i < spans.length; i++) {
  if (status) {
    spans[i].style.backgroundColor = color;
  } else {
    spans[i].style.backgroundColor = originalBackground;
  }
}

var originalBackground;
function toggleHighlight() {
  var pos = this.getAttribute("value");
  var color;
  switch (pos) {
    case "char":
      color = "sandybrown";
      break;
    case "area":
      color = "teal";
      break;
    case "partner":
      color = "darkred";
      break;
    case "item":
      color = "yellow";
      break;
    case "title":
      color = "orange";
      break;
  }
}
