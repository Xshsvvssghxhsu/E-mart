// src/pages/LiveChat.jsx
import React, { useState } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can we help you today?", sender: "support" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate a bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! Our team will reply soon.", sender: "support" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Live Chat</h2>

      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
