const togglebutton=document.getElementById("toggleButton");
const bulb=document.getElementById("bulb");
const switchStatus = document.getElementById('status');

togglebutton.addEventListener('click',()=>{
    let bgcolor=document.body.style.backgroundColor;
    if(!bgcolor || bgcolor=="white"){

        togglebutton.innerText="Turn Off";
        switchStatus.innerText="Status: On";
        bulb.setAttribute('class','bulb');
        document.body.style.backgroundColor="black";
    
    }
    else  if( bgcolor=="black"){
        togglebutton.innerText="Turn On";
        switchStatus.innerText="Status: Off";
        bulb.setAttribute('class','bulb Off');
        document.body.style.backgroundColor="white";
    
    }
})