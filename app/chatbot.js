document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");
    const closeButton = document.getElementById("close-button");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const messages = document.getElementById("messages");
  
    // Open chat
    chatButton.addEventListener("click", () => {
      chatWindow.style.display = "flex";
    });
  
    // Close chat
    closeButton.addEventListener("click", () => {
      chatWindow.style.display = "none";
    });
  
    // Handle message sending
    sendButton.addEventListener("click", () => {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        // Display user message
        const userMsgDiv = document.createElement("div");
        userMsgDiv.textContent = `You: ${userMessage}`;
        userMsgDiv.style.margin = "5px 0";
        messages.appendChild(userMsgDiv);
  
        // Send message to NLP model (Placeholder logic)
        const botMsgDiv = document.createElement("div");
        botMsgDiv.textContent = "Some Bot: Hello! I'm on my training process...";
        botMsgDiv.style.margin = "5px 0";
        botMsgDiv.style.color = "#ffffff";
        messages.appendChild(botMsgDiv);
  
        // Scroll to bottom
        messages.scrollTop = messages.scrollHeight;
  
        // Clear input
        userInput.value = "";
  
        // Aquí conectarás tu modelo NLP para generar respuestas
        // Por ejemplo, haciendo un fetch a tu backend
      }
    });
  });