const min = 1;
const max = 50;
const maxAttempts = 5;

let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

const input = document.getElementById("guessNumber");
const button = document.getElementById("button");
const message = document.getElementById("attempts");
const result = document.getElementById("result");
const attemptsRemaining = document.getElementById("attemptsRemaining");

button.onclick = function () {
	const userGuess = Number(input.value);

	if (isNaN(userGuess)) {
		alert("Your guess is not a number");
		return;
	}

	if (userGuess < min || userGuess > max) {
		alert(`Enter number between ${min} and ${max}`);
		return;
	}

	attempts++;

	const remaining = maxAttempts - attempts;

	if (userGuess < answer) {
		message.textContent = `Too LOW! Remaining attempts: ${remaining}`;
	} else if (userGuess > answer) {
		message.textContent = `Too HIGH! Remaining attempts: ${remaining}`;
	} else {
		result.style.color = "green";
		result.textContent = `🎉 Correct! You guessed in ${attempts} attempts`;
		button.disabled = true;
		return;
	}

	if (attempts === maxAttempts) {
		attemptsRemaining.textContent = "Game over! Refresh to try again.";
		button.disabled = true;
	}
};
