/**
 * Write your challenge solution here
 */
const nameip=document.getElementById("nameInput");
const jobip=document.getElementById("jobInput");
const ageip=document.getElementById("ageInput");
const bioip=document.getElementById("bioInput");


const namedp=document.getElementById("nameDisplay");
const jobdp=document.getElementById("jobDisplay");
const agedp=document.getElementById("ageDisplay");
const biodp=document.getElementById("bioDisplay");

nameip.addEventListener('input',()=>{
  namedp.innerText=nameip.value||"not provided";
  
})
jobip.addEventListener('input',()=>{
  jobdp.innerText=jobip.value||"not provided";
  
})
ageip.addEventListener('input',()=>{
  agedp.innerText=ageip.value||"not provided";
  
})
bioip.addEventListener('input',()=>{
  biodp.innerText=bioip.value||"not provided";
  
})
