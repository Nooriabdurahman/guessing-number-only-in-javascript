const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    
    // Check if the user cancels the prompt
    if (guess === null) {
        window.alert("Game cancelled.");
        break;
    }
    
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("It's too low! Try again.");
        } else if (guess > answer) {
            window.alert("It's too high! Try again.");
        } else {
            window.alert(`Correct! You guessed it in ${attempts} attempts.`);
            running = false; // Exit the loop
        }
    }
}1033