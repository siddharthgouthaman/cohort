const togglebutton=document.getElementById("toggleButton");
const bulb=document.getElementById("bulb");
const switchstatus=document.getElementsById("status");
const bgcolor=document.body.style.backgroundColor;
togglebutton.addEventListener('click',()=>{
    if(!bgcolor || bgcolor=="white"){
        togglebutton.innerText="Turn Off";
        switchstatus.innerText="Status: On";
        bulb.setAttribute('class',bulb);
        document.body.style.backgroundColor="black";
    
    }
    else  if( bgcolor=="black"){
        togglebutton.innerText="Turn On";
        switchstatus.innerText="Status: Off";
        bulb.setAttribute('class',bulb.Off);
        document.body.style.backgroundColor="white";
    
    }
})