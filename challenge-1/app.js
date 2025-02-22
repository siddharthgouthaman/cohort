
const toggleBtn = document.getElementById('toggleButton');
const switchStatus = document.getElementById('status');
const bulb = document.getElementById('bulb');
const heading = document.getElementsByTagName('h1')[0];
const para = document.getElementsByTagName('p')[0];

function changeBGTheme(color) {
  document.body.style.backgroundColor = color;
}

function changeSwitchstatus(status, color) {
  switchStatus.innerText = status;
  switchStatus.style.color = color;
}

function changeWebText(color) {
  heading.style.color = color;
  para.style.color = color;
}

toggleBtn.addEventListener('click', () => {
  const bgColor = document.body.style.backgroundColor;
  if (!bgColor || bgColor === 'white') {
    changeBGTheme('black');
    changeSwitchstatus('Status: On', 'white');
    changeWebText('white');
    toggleBtn.innerText = 'Turn Off';
    bulb.setAttribute('class', 'bulb');
  } else {
    changeBGTheme('white');
    changeSwitchstatus('Status: Off', 'black');
    changeWebText('black');
    toggleBtn.innerText = 'Turn On';
    bulb.setAttribute('class', 'bulb off');
  }
});
