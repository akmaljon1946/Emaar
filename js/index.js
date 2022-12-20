const seeMoreBtn = () => {
	document.querySelector('#bimodal').classList.add('animation-open')
	document.querySelector('.curtain').classList.add('curtain--on')
	document.getElementById('bimodal').style.display = 'flex'
	document.getElementById('bimodal').classList.remove('animation-close')
}

const closeBtn = () => {
	document.getElementById('bimodal').classList.add('animation-close')
	document.getElementById('bimodal').classList.remove('animation-open')
	document.querySelector('.curtain').classList.remove('curtain--on')
	setTimeout(() => {
		document.getElementById('bimodal').style.display = 'none'
	}, 500)
}

const winPush = () => {
	window.onclick = function (event) {
		if (event.target == myModal) {
			myModal.style.display = 'none'
		}
	}
}

const showTelNumber = trueTel => {
	document
		.querySelector('#hideTel')
		.firstChild.replaceData(6, trueTel.length, trueTel)
}

const detailCreekRiceBtn = () => {
	document.querySelector('#rise').classList.add('animation-open')
	document.querySelector('#emaar').style.display = 'none'
	document.querySelector('#rise').style.display = 'block'
	document.querySelector('#rise').classList.remove('animation-close')
}
const riseBtn = () => {
	document.querySelector('#rise').classList.add('animation-close')
	document.querySelector('#emaar').style.display = 'block'
	document.querySelector('#rise').classList.remove('animation-open')
	setTimeout(() => {
		document.querySelector('#rise').style.display = 'none'
	}, 500)
}

const heroBtn = () => {
	document.querySelector('#modal').classList.add('animation-in')
	document.querySelector('#modal').style.display = 'block'
	document.querySelector('.curt').classList.add('curt--on')
	document.querySelector('#modal').classList.remove('animation-out')
}

const modalHide = () => {
	document.querySelector('#modal').classList.add('animation-out')
	document.querySelector('.curt').classList.remove('curt--on')
	document.querySelector('#modal').classList.remove('animation-in')
	setTimeout(() => {
		document.querySelector('#modal').style.display = 'none'
	}, 500)
}
