import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      id: messages.length + 1,
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message Board</h1>
      <form onSubmit={handleInputMessage} className="message-input-container">
        <label>
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
          />
        </label>
        <button type="submit" className="submit-message-button">
          Submit
        </button>
      </form>
      <div className="board">
        {messages.map((message) => (
          <div key={message.id}>
            <h1>{message.message}</h1>
            <button onClick={() => handleDeleteMessage(message.id)}>
              x
            </button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
