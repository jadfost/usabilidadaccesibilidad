const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const muteBtn = document.getElementById('mute-btn');
const volumeBar = document.getElementById('volume-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', function() {
  window.location.href = 'test2.html';
});

nextBtn.addEventListener('click', function() {
  window.location.href = 'test1.html';
});

function playPauseAudio() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}

function updateSeekBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;
}

function updateAudioTime() {
  const time = (audio.currentTime / audio.duration) * 100;
  seekBar.value = time;
}

function setAudioVolume() {
  audio.volume = volumeBar.value / 100;
  if (audio.volume === 0) {
    muteBtn.innerHTML = '<i class="fa fa-volume-off"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
  }
}

function toggleMute() {
  if (audio.volume > 0) {
    audio.volume = 0;
    muteBtn.innerHTML = '<i class="fa fa-volume-off"></i>';
    volumeBar.value = 0;
  } else {
    audio.volume = volumeBar.value / 100;
    muteBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
    volumeBar.value = audio.volume * 100;
  }
}

playPauseBtn.addEventListener('click', playPauseAudio);
audio.addEventListener('timeupdate', updateSeekBar);
audio.addEventListener('timeupdate', updateAudioTime);
volumeBar.addEventListener('input', setAudioVolume);
muteBtn.addEventListener('click', toggleMute);
