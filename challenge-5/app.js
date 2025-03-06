/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById("carouselTrack"),
  caption = document.getElementById("caption"),
  prevButton = document.getElementById("prevButton"),
  nextButton = document.getElementById("nextButton"),
  autoPlayButton = document.getElementById("autoPlayButton"),
  timerDisplay = document.getElementById("timerDisplay"),
  carouselNav = document.getElementById("carouselNav");

images.forEach((img, i) => {
  const imgtag = document.createElement('img');
  const ptag = document.createElement('p');
  const span = document.createElement('span');

  span.setAttribute('data-id', i);
  span.classList.add('carousel-indicator');

  if (i == 0) {
    imgtag.classList.add('carousel-slide');
    ptag.classList.add('carousel-caption');
    ptag.innerText = img.caption;
    caption.appendChild(ptag);
    span.classList.add('active');
  }

  imgtag.setAttribute('data-id', i);
  imgtag.setAttribute('src', img.url);
  imgtag.setAttribute('alt', img.caption);

  carouselTrack.appendChild(imgtag);
  carouselNav.appendChild(span);

  span.addEventListener('click', function (e) {
    const id = e.target.getAttribute('data-id');
    if (!e.target.classList.contains('active')) {
      carousel(Number(id));
    }
  });
});

nextButton.addEventListener('click', function () {
  const currentItemId = Number(carouselTrack.children[0].getAttribute('data-id'));
  const id = (currentItemId === images.length - 1) ? 0 : Number(currentItemId) + 1;
  carousel(Number(id));
});

prevButton.addEventListener('click', function () {
  prev();
});

function prev() {
  const currentItemId = Number(carouselTrack.children[0].getAttribute('data-id'));
  const id = (currentItemId === 0) ? images.length - 1 : Number(currentItemId) - 1;
  carousel(Number(id));
}

let intervalTimeRefrence, secondInterValRef;
let slideCounter = 5;

autoPlayButton.addEventListener('click', function (e) {
  if (e.target.innerText === "Start Auto Play") {
    e.target.innerText = "Stop Auto Play";
    timerDisplay.innerText = `Next slide in ${slideCounter}s`;

    intervalTimeRefrence = setInterval(function () {
      slideCounter = 5;
      timerDisplay.innerText = `Next slide in ${slideCounter}s`;
      clearInterval(secondInterValRef);
      next();
      secondInterValRef = setInterval(function () {
        timerDisplay.innerText = `Next slide in ${--slideCounter}s`;
      }, 1000);
    }, 5000);

    secondInterValRef = setInterval(function () {
      timerDisplay.innerText = `Next slide in ${--slideCounter}s`;
    }, 1000);
  } else {
    e.target.innerText = "Start Auto Play";
    timerDisplay.innerText = ``;
    clearInterval(intervalTimeRefrence);
    clearInterval(secondInterValRef);
  }
});

function carousel(id) {
  console.log(`id ->>> ${id}`);
  for (let i = 0; i < carouselTrack.children.length; i++) {
    carouselTrack.children[i].classList.remove('carousel-slide');
  }
  
  let appendImgFirst;
  for (let i = 0; i < carouselTrack.children.length; i++) {
    const dataId = Number(carouselTrack.children[i].getAttribute('data-id'));
    if (id === dataId) appendImgFirst = carouselTrack.children[i];
  }

  appendImgFirst.classList.add('carousel-slide');
  caption.children[0].innerText = images[id].caption;
  carouselTrack.insertBefore(appendImgFirst, carouselTrack.firstChild);

  for (let i = 0; i < carouselNav.children.length; i++) {
    carouselNav.children[i].classList.remove('active');
  }
  carouselNav.children[id].classList.add('active');
}
