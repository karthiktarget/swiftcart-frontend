import React, { useState } from "react";
import "../styles/ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your query! Our team will get back to you shortly." },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className={`chat-widget ${isOpen ? "open" : ""}`}>
      <div className="chat-icon" onClick={handleToggle}>
        💬
      </div>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header" onClick={handleToggle}>
            SwiftCart Support
            <span className="close-btn">×</span>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
