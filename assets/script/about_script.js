let d1 = document.getElementById('description1');
let d2 = document.getElementById('description2');
let d3 = document.getElementById('description3');
let d4 = document.getElementById('description4');

d1.style.transition = "0.8s";
d2.style.transition = "0.8s";
d3.style.transition = "0.8s";
d4.style.transition = "0.8s";

function f1Click(){
  d1.style.opacity = "1";
}

function f2Click(){
  d2.style.opacity = "1";
}

function f3Click(){
  d3.style.opacity = "1";
}

function f4Click(){
  d4.style.opacity = "1";
}

d1.onclick = f1Click;
d2.onclick = f2Click;
d3.onclick = f3Click;
d4.onclick = f4Click;
