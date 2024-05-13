let drawnNumberList = [];
let maxNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function showScreenText(tag, text) {
  let element = document.querySelector(tag);
  element.innerHTML = text;
  // responsiveVoice.speak(text, "Brazilian Portuguese Female", { rate: 1.2 });
}

function showInicialMessage() {
  showScreenText("h1", "Secret number game");
  showScreenText("p", `Choose a number between 1 and ${maxNumber}`);
}

showInicialMessage();

function verifyGuess() {
  let guess = document.querySelector("input").value;
  // console.log(guess == secretNumber);

  if (guess == secretNumber) {
    showScreenText("h1", "Congrats!");
    let attemptWord = attempts > 1 ? "attempts" : "attempt";
    let attemptMessage = `You got it right with ${attempts} ${attemptWord}!`;
    showScreenText("p", attemptMessage);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (guess > secretNumber) {
      showScreenText("p", "The secret number is lower!");
    } else {
      showScreenText("p", "The secret number is bigger!");
    }
    attempts++;
    cleanField();
  }
}

function generateRandomNumber() {
  let chosenNumber = parseInt(Math.random() * maxNumber + 1);
  let numberOfElementsList = drawnNumberList.length;

  if (numberOfElementsList == maxNumber) {
    drawnNumberList = [];
  }

  if (drawnNumberList.includes(chosenNumber)) {
    return generateRandomNumber();
  } else {
    drawnNumberList.push(chosenNumber);
    // console.log(drawnNumberList);
    return chosenNumber;
  }
}

function cleanField() {
  guess = document.querySelector("input");
  guess.value = "";
}

function restartGame() {
  secretNumber = generateRandomNumber();
  cleanField();
  attempts = 1;
  showInicialMessage();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
