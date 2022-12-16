const mainBtn = document.querySelector('.main__btn')
const downloadCloseBtn = document.getElementById('close')
const myModal = document.getElementById('mymodal')

mainBtn.addEventListener('click', () => {
	myModal.classList.add('animation-open')
	myModal.style.display = 'block'
	myModal.classList.remove('animation-close')
})

downloadCloseBtn.addEventListener('click', () => {
	myModal.classList.add('animation-close')
	myModal.classList.remove('animation-open')
	setTimeout(() => {
		myModal.style.display = 'none'
	}, 500)
})

window.onclick = function (event) {
	if (event.target == myModal) {
		myModal.style.display = 'none'
	}
}

const hideTel = document.querySelector('#hideTel')
const showTel = document.querySelector('#showTel')

showTel.addEventListener('click', () => showSTR('777-69-69'))

const showSTR = trueTel =>
	hideTel.firstChild.replaceData(6, trueTel.length, trueTel)
