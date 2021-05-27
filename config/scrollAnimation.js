const fadeTitle = document.querySelectorAll(".titleFade")
const fadeContent = document.querySelectorAll(".contentFade")

function scrollAnimation() {
	let winHeight = window.innerHeight

	fadeTitle.forEach(items => {
		let elementFade = items.getBoundingClientRect().top
		if (elementFade <= winHeight / 1.3 ) items.classList.add('revealTitle')
	})

	fadeContent.forEach(item => {
		let elementFade = item.getBoundingClientRect().top
		if (elementFade <= winHeight / 1.3 ) item.classList.add('revealContent')
	})
}

document.addEventListener("DOMContentLoaded", scrollAnimation)
window.addEventListener('scroll', scrollAnimation)
