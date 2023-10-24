let date = new Date('sep 1 2021 0:00:00')
const INTERVAL = 1000

counts()

function counts() {
	let now = new Date()
	gap = date - now

	days = Math.floor(gap / 1000 / 60 / 60 / 24)
	hours = Math.floor(gap / 1000 / 60 / 60) % 24
	minutes = Math.floor(gap / 1000 / 60) % 60
	seconds = Math.floor(gap / 1000) % 60
	if (seconds < 10) seconds = '0' + seconds
	if (minutes < 10) minutes = '0' + minutes
	if (hours < 10) hours = '0' + hours
	if (days < 10) days = '0' + days

	document.querySelector('.days').textContent = days + 'days'
	document.querySelector('.hours').textContent = hours + 'hours'
	document.querySelector('.mins').textContent = minutes + 'mins'
	document.querySelector('.secs').textContent = seconds + 'seconds'
	return gap
}
const inter = setInterval(() => {
	if (counts() <= 0) {
		clearInterval(inter)
		document.querySelector('.days').textContent = 0 + 'days'
		document.querySelector('.hours').textContent = 0 + 'hours'
		document.querySelector('.mins').textContent = 0 + 'mins'
		document.querySelector('.secs').textContent = 0 + 'seconds'
	} else {
		counts()
	}
}, INTERVAL)