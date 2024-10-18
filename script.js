const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value;
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  chatMessages.appendChild(newMessage);
  chatInput.value = '';
});