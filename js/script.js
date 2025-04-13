const secretWord = "TREMO"; // Você pode mudar essa palavra
let currentRow = 0;

function createGrid() {
  const game = document.getElementById("game");
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = `row-${i}`;
    for (let j = 0; j < 5; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.id = `tile-${i}-${j}`;
      row.appendChild(tile);
    }
    game.appendChild(row);
  }
}

function checkGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.toUpperCase();

  if (guess.length !== 5) {
    showMessage("Digite uma palavra com 5 letras.");
    return;
  }

  if (currentRow >= 6) {
    showMessage("Fim de jogo! A palavra era " + secretWord);
    return;
  }

  const row = document.getElementById(`row-${currentRow}`);
  for (let i = 0; i < 5; i++) {
    const tile = document.getElementById(`tile-${currentRow}-${i}`);
    tile.textContent = guess[i];

    if (guess[i] === secretWord[i]) {
      tile.classList.add("green");
    } else if (secretWord.includes(guess[i])) {
      tile.classList.add("yellow");
    } else {
      tile.classList.add("gray");
    }
  }

  if (guess === secretWord) {
    showMessage("Parabéns! Você acertou!");
  } else if (currentRow === 5) {
    showMessage("Você perdeu! A palavra era " + secretWord);
  }

  currentRow++;
  input.value = "";
  input.focus();
}

function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

createGrid();
s