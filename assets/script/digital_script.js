let pf = document.getElementById('projector-front');
let pd = document.getElementById('projector-description');
let sf = document.getElementById('silver-screen-front');
let sd = document.getElementById('silver-screen-description');

pf.style.transition = "0.8s";
pd.style.transition = "0.8s";
sf.style.transition = "0.8s";
sd.style.transition = "0.8s";

function pfadeIn(){
  pf.style.opacity = "0.2";
  pd.style.opacity = "1";
}

function pfadeOut(){
  pf.style.opacity = "1";
  pd.style.opacity = "0";
}

function sfadeIn(){
  sf.style.opacity = "0.35";
  sd.style.opacity = "1";
}

function sfadeOut(){
  sf.style.opacity = "1";
  sd.style.opacity = "0";
}

pd.onmouseover = pfadeIn;
pd.onmouseleave = pfadeOut;
sd.onmouseover = sfadeIn;
sd.onmouseleave = sfadeOut;
