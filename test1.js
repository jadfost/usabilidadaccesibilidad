const gif = document.querySelector('.gif-container img');
const pauseBtn = document.querySelector('#pause-btn');
const playBtn = document.querySelector('#play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', function() {
  window.location.href = 'test3.html';
});

nextBtn.addEventListener('click', function() {
  window.location.href = 'test2.html';
});

let isPaused = false;
let intervalId;

function pauseGif() {
  if (!isPaused) {
    clearInterval(intervalId);
    isPaused = true;
  }
}

function playGif() {
  if (isPaused) {
    intervalId = setInterval(() => {
      gif.src = gif.src;
    }, 0);
    isPaused = false;
  }
}

pauseBtn.addEventListener('click', pauseGif);
playBtn.addEventListener('click', playGif);
