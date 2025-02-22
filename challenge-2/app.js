/**
 * Write your challenge solution here
 */
const mainheading=document.getElementById("mainHeading");
const redbtn=document.getElementById("redButton");
const greenbtn=document.getElementById("greenButton");
const bluebtn=document.getElementById("blueButton");
const purplebtn=document.getElementById("purpleButton");
const orginalbtn=document.getElementById("resetButton");

redbtn.addEventListener('click',()=>{
mainheading.style.color="#e74c3c"
})
greenbtn.addEventListener('click',()=>{
  mainheading.style.color="#2ecc71"
})
bluebtn.addEventListener('click',()=>{
  mainheading.style.color="#3498db"
})
purplebtn.addEventListener('click',()=>{
  mainheading.style.color="#9b59b6"
})
orginalbtn.addEventListener('click',()=>{
  mainheading.style.color="34495e"
})
