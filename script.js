function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        // Display user's message
        displayMessage(message, 'user-message');

        // Clear the input field
        messageInput.value = '';

        // Simulate a bot response
        setTimeout(() => {
            displayMessage('This is Vijay response.', 'bot-message');
        }, 1000);
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');

    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
