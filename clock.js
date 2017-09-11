const secondHand = document.querySelector('.sec-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate() {
	const now = new Date();

	// FOR SECONDS HAND - 
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90; 
	/* 	added +90 here to cancel out the 90 degrees set 
		in .hand:transform-rotate to keep start position 12...
	*/
	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


	// FOR HOURS HAND - 
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	// added 90 again for the same reason... 
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


	// FOR MINUTES HAND - 
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	//added 90 again for the same reason... 
	minHand.style.transform = `rotate(${minsDegrees}deg)`;





}

setInterval(setDate, 1000);