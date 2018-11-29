
let distanceToNextImage = -1200;
let currentImageNumber = 0;
let let container = document.getElementById('carousel-container');

function next(){
  currentImageNumber = currentImageNumber + 1;
  container.style.left = currentImageNumber * distanceToNextImage;
}
