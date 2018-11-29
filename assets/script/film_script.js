let vf = document.getElementById('vignettes-front');
let vd = document.getElementById('vignettes-description');
let nf = document.getElementById('nocturnal-front');
let nd = document.getElementById('nocturnal-description');
let bf = document.getElementById('blue-hour-front');
let bd = document.getElementById('blue-hour-description');

vf.style.transition = "0.8s";
vd.style.transition = "0.8s";
nf.style.transition = "0.8s";
nd.style.transition = "0.8s";
bf.style.transition = "0.8s";
bd.style.transition = "0.8s";

function vfadeIn(){
  vf.style.opacity = "0.4";
  vd.style.opacity = "1";
}

function vfadeOut(){
  vf.style.opacity = "1";
  vd.style.opacity = "0";
}

function nfadeIn(){
  nf.style.opacity = "0.2";
  nd.style.opacity = "1";
}

function nfadeOut(){
  nf.style.opacity = "1";
  nd.style.opacity = "0";
}

function bfadeIn(){
  bf.style.opacity = "0.25";
  bd.style.opacity = "1";
}

function bfadeOut(){
  bf.style.opacity = "1";
  bd.style.opacity = "0";
}

vd.onmouseover = vfadeIn;
vd.onmouseleave = vfadeOut;
nd.onmouseover = nfadeIn;
nd.onmouseleave = nfadeOut;
bd.onmouseover = bfadeIn;
bd.onmouseleave = bfadeOut;
