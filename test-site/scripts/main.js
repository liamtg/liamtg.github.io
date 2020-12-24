const myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/IMG_1808.jpeg') {
		myImage.setAttribute('src', 'images/star.jpeg');
	} else {
		myImage.setAttribute('src', 'images/IMG_1808.jpeg');
	}
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Enter your name please champ:');
	if (!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Great new title, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Great new title, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}