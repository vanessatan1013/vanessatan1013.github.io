let background = getElementById("background");

background.style.transition = "2s";

function fadeIn() {
  background.style.opacity = "1";
}

background.ononline = fadeIn;
