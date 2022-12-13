const heroBtn = document.getElementById('herobtn')
const closeBtn = document.getElementById('close')
const modal = document.getElementById('modal')

herobtn.addEventListener('click', () => {
	modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}
