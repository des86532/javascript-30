//變數
let countdown;
const timerdisplay = document.querySelector('.display__time-left')
const endtime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

//function
function timer(second) {
	clearInterval(countdown)

	const now = Date.now();
	const then = now + second * 1000;
	displayendtime(then)
	displayTimeLeft(second)

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now())/1000);
		if(secondsLeft <= 0) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft)
	},1000)
}

function displayTimeLeft(seconds) {
	const minute = Math.floor(seconds / 60) 
	const remaindSeconds = seconds % 60
	document.title = `${minute}:${remaindSeconds < 10 ? '0':''}${remaindSeconds}`
	timerdisplay.textContent = `${minute}:${remaindSeconds < 10 ? '0':''}${remaindSeconds}`
}

function displayendtime(timestamp) {
	const end = new Date(timestamp)
	const hour = end.getHours()
	const minute = end.getMinutes()
	endtime.textContent = `Be Back At ${hour}:${minute < 10 ? '0':''}${minute}`
}

function starttimer() {
	const seconds = this.dataset.time
	timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', starttimer))
document.customForm.addEventListener('submit', function(e) {
	e.preventDefault()
	const min = this.minutes.value
	const sec = min * 60
	timer(sec)
	this.reset()
})