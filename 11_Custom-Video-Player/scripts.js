// get element
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = document.querySelector('.fullScreen')
let change = false

//functions 

function toggleplay() {
	if(video.paused) {
		video.play()
	} else {
		video.pause()
	}
}

function updateicon() {
	const icon = video.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

function skip() {
//dataset.skip = data-skip  dataset為自定義的變數
	console.log(this.dataset.skip);
//parsefloat 將string轉為數值
	video.currentTime += parseFloat(this.dataset.skip);
}

function updateslider() {
	if (!move) {return}
	console.log(this.value);
	video[this.name] = this.value;
}

function updateprogress() {
	const percent = (video.currentTime/video.duration) * 100
	progressBar.style.flexBasis = `${percent}%`
}

function updateprogressbar(e) {
	if (!move) {return}
	const updateprogressbartime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = updateprogressbartime
}

function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}
//event listens
video.addEventListener('click', toggleplay);  //點擊畫面可以撥放及暫停
toggle.addEventListener('click',toggleplay);  //點擊撥放按鈕可以撥放以及暫停
video.addEventListener('play', updateicon);   //更新撥放按鈕切換為暫停按鈕
video.addEventListener('pause', updateicon);  //更新暫停按鈕切換為撥放按鈕
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));   //快進25S 倒退10S
video.addEventListener('timeupdate', updateprogress)  //當影片撥放的長度變更時，進度條會變化
ranges.forEach(range => range.addEventListener('change', updateslider));   //聲音調整以及撥放速度調整
progress.addEventListener('click', updateprogressbar)  //可以點擊進度條直接更新影片進度
fullScreenBtn.addEventListener('click', fullScreen);

//拖曳功能
let move = false;
progress.addEventListener('mousedown', () => move = true)
ranges.forEach(range => range.addEventListener('mousedown', () => move = true));
progress.addEventListener('mousemove', updateprogressbar)
ranges.forEach(range => range.addEventListener('mousemove', updateslider));
progress.addEventListener('mouseup', () => move = false)
ranges.forEach(range => range.addEventListener('mouseup', () => move = false));
