//變數
const buttons = document.querySelectorAll('.timer__button')
const time_Left = document.querySelector('.display__time-left')
const end_time = document.querySelector('.display__end-time')
const time = new Date()



//function
function display_left_time() {
	const lefttime = new Date()
	time_Left.textContent = `
	${lefttime.getHours()}:${(lefttime.getMinutes() < 10 ? '0':'') +　lefttime.getMinutes()}:${(lefttime.getSeconds() < 10 ? '0':'') +　lefttime.getSeconds()}`
	timestart()
}

function display_end_time(e) {
	const endtime = new Date()
	const lefttimesec = e.target.dataset.time
	const lefttimemin = lefttimesec / 60
	const min = time.getMinutes()
	endtime.setMinutes(min + lefttimemin)
	console.log(endtime)
	end_time.textContent = `
	Be Back At ${endtime.getHours()}:${(endtime.getMinutes() < 10 ? '0':'') + endtime.getMinutes()}`
}

function timestart() {
	let test = setInterval(display_left_time,1000)
}

//事件
buttons.forEach(button => button.addEventListener('click', display_end_time))
buttons.forEach(button => button.addEventListener('click', display_left_time))