const mainBtn = document.querySelector('.main__btn')
const downloadCloseBtn = document.getElementById('close')
const myModal = document.getElementById('mymodal')

mainBtn.addEventListener('click', () => {
	myModal.style.display = 'block'
})

downloadCloseBtn.addEventListener('click', () => {
	myModal.style.display = 'none'
})

window.onclick = function (event) {
	if (event.target == myModal) {
		myModal.style.display = 'none'
	}
}
