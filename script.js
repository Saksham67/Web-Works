let flipCount = 0;  // Counter to keep track of flips

function rollDice() {
  // Play dice roll sound
  const diceSound = document.getElementById('dice-sound');
  diceSound.play();

  // Add rolling animation to the dice
  const dice = document.getElementById('dice');
  dice.classList.add('dice-roll');
  
  // Disable button during dice roll
  document.querySelector('button').disabled = true;

  // Remove previous result animations
  const resultText = document.getElementById('result');
  resultText.classList.remove('win', 'lose');

  // Delay to simulate the rolling effect
  setTimeout(() => {
    flipCount++; // Increment flip counter

    // Make the dice flip harder for 6: Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Determine the dice value (harder for 6 to appear)
    let diceValue;
    if (randomNumber <= 4 && flipCount >= 25) {
      diceValue = 6;
      flipCount = 0; // Reset the flip count after 6 appears
    } else {
      diceValue = Math.floor(Math.random() * 5) + 1;
    }

    // Change the dice image based on the value
    dice.src = `dice${diceValue}.png`;

    // Display the result message with animation
    if (diceValue === 6) {
      resultText.textContent = "Wohooo! You got 50% discount!";
      resultText.classList.add('win');
    } else {
      resultText.textContent = "Sorry, better luck next time!";
      resultText.classList.add('lose');
    }

    // Show result with animation
    resultText.style.opacity = 1;

    // Remove dice rolling class after animation ends
    dice.classList.remove('dice-roll');

    // Re-enable button
    document.querySelector('button').disabled = false;
  }, 1000); // 1-second delay for the dice roll animation
}
