const socket = io();
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value;
  socket.emit('chat message', message);   
 // Enviar mensaje al servidor
  chatInput.value = '';
});

socket.on('chat message', (msg) => {
  const newMessage = document.createElement('p');
  newMessage.textContent = msg;
  chatMessages.appendChild(newMessage);
});