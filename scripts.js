document.addEventListener('DOMContentLoaded', function() {
  const raffleForm = document.getElementById('raffleForm');
  const drawButton = document.getElementById('drawButton');
  const resetButton = document.getElementById('resetButton');
  const winnerDisplay = document.getElementById('winnerDisplay');
  const confirmationMessage = document.getElementById('confirmationMessage');
  let participants = [];

  raffleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
      participants.push(name);
      nameInput.value = '';
      confirmationMessage.textContent = `${name} has been added!`;
      setTimeout(() => {
        confirmationMessage.textContent = '';
      }, 3000);
    }
  });

  drawButton.addEventListener('click', function() {
    if (participants.length === 0) {
      alert('No participants to draw from!');
      return;
    }
    const winner = participants[Math.floor(Math.random() * participants.length)];
    winnerDisplay.textContent = `The winner is: ${winner}`;
  });

  resetButton.addEventListener('click', function() {
    participants = [];
    winnerDisplay.textContent = '';
    confirmationMessage.textContent = 'The participant list has been cleared!';
    setTimeout(() => {
      confirmationMessage.textContent = '';
    }, 3000);
  });
});
