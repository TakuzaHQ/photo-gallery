function show(el) {
  el.classList.add("active");
}

function hide(el) {
  el.classList.remove("active");
}

function addTabindex() {
  console.log("page loaded");
  var figs = document.getElementsByTagName("figure");
  for (var i = 0; i < figs.length; i++) {
    figs[i].setAttribute("tabindex", "0");
  }
}

window.onload = addTabindex;