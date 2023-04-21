const videos = document.querySelectorAll('.video');
const descriptions = document.querySelectorAll('.description');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');

let currentVideo = 0;
let isPlaying = false;
let isMuted = false;

function playVideo() {
	videos[currentVideo].play();
	playBtn.style.display = 'none';
	pauseBtn.style.display = 'inline-block';
	isPlaying = true;
}

function pauseVideo() {
	videos[currentVideo].pause();
	playBtn.style.display = 'inline-block';
	pauseBtn.style.display = 'none';
	isPlaying = false;
}

function muteVideo() {
	if (isMuted) {
		videos[currentVideo].muted = false;
		muteBtn.innerHTML = '&#128266;';
		isMuted = false;
	} else {
		videos[currentVideo].muted = true;
		muteBtn.innerHTML = '&#128263;';
		isMuted = true;
	}
}

function showVideo(index) {
	videos[currentVideo].pause();
	playBtn.style.display = 'inline-block';
	pauseBtn.style.display = 'none';
	descriptions[currentVideo].style.display = 'none';
	currentVideo = index;
	videos[currentVideo].currentTime = 0;
	videos[currentVideo].play();
	descriptions[currentVideo].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
	let index = (currentVideo === 0) ? videos.length - 1 : currentVideo - 1;
	showVideo(index);
});

nextBtn.addEventListener('click', () => {
	let index = (currentVideo === videos.length - 1) ? 0 : currentVideo + 1;
	showVideo(index);
});

playBtn.addEventListener('click', () => {
	playVideo();
});

pauseBtn.addEventListener('click', () => {
	pauseVideo();
});

muteBtn.addEventListener('click', () => {
	muteVideo();
});

showVideo(currentVideo);
