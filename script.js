const min = 1;
const max = 100;
let answer = Math.floor(Math.random() * (max - min) + 1);
let attempts = 0;
let userGuess;
let winner = false;
do {
	userGuess = Number(prompt("Enter a number"));
	if (attempts >= 3) {
		alert("You used maximum limit please restart game to get new chance");
		break;
	}
	if (isNaN(userGuess)) {
		alert("Your guess is not a number");
	}

	if (userGuess === answer) {
		winner = true;
		break;
	}
	attempts++;
} while (!winner);

console.log("You win");
