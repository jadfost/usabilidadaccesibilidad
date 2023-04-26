const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const muteBtn = document.getElementById('mute-btn');
const volumeBar = document.getElementById('volume-bar');
const fullScreenBtn = document.getElementById('full-screen-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', function() {
  window.location.href = 'test1.html';
});

nextBtn.addEventListener('click', function() {
  window.location.href = 'test3.html';
});

function playPauseVideo() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}

function updateSeekBar() {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.value = progress;
}

function updateVideoTime() {
  const time = (video.currentTime / video.duration) * 100;
  // code to update the video time display
}

function updateVolume() {
  video.volume = volumeBar.value;
}

function muteUnmute() {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
    volumeBar.value = video.volume;
  } else {
    video.muted = true;
    muteBtn.innerHTML = '<i class="fa fa-volume-off"></i>';
    volumeBar.value = 0;
  }
}

function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

playPauseBtn.addEventListener('click', playPauseVideo);
seekBar.addEventListener('input', () => {
  const time = video.duration * (seekBar.value / 100);
  video.currentTime = time;
});
video.addEventListener('timeupdate', updateSeekBar);
volumeBar.addEventListener('input', updateVolume);
muteBtn.addEventListener('click', muteUnmute);
fullScreenBtn.addEventListener('click', toggleFullScreen);
