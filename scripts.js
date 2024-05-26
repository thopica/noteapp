document.addEventListener('DOMContentLoaded', function() {
  const raffleForm = document.getElementById('raffleForm');
  const drawButton = document.getElementById('drawButton');
  const winnerDisplay = document.getElementById('winnerDisplay');
  let participants = [];

  raffleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
      participants.push(name);
      nameInput.value = '';
      alert(`${name} has been added!`);
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
});
