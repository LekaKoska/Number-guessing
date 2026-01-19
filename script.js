const min = 1;
const max = 50;
let answer = Math.floor(Math.random() * (max - min) + 1);
let attempts = 0;
let userGuess;
let winner = false;
do {
	console.log(answer);
	userGuess = Number(prompt(`Guess a number between ${min} and ${max}`));
	if (attempts >= 4) {
		alert("You used maximum limit please restart game to get new chance");
		break;
	}
	if (isNaN(userGuess)) {
		window.alert("Your guess is not a number");
	} else if (userGuess < min || userGuess > max) {
		window.alert(`Please enter a valid number between ${min} and ${max}`);
	} else {
		if (userGuess < answer) {
			window.alert("To low, try again!");
		} else if (userGuess > answer) {
			window.alert("To high, try again");
		}
		attempts++;
	}
	if (userGuess === answer) {
		winner = true;
		window.alert(`CONGRATULATIONS!! Its took ${attempts} attemps`);
		break;
	}
} while (!winner);
