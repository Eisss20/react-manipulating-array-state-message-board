import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleInput = (event) => {
    setInputMessage(event.target.value);
  };
  const addSubmit = (event) => {
    event.preventDefault();
    const newMessageList = {
      id: messageList.length + 1,
      message: inputMessage,
    };
    setMessageList([...messageList, newMessageList]);
    setInputMessage("");
  };

  const deleteButton = (id) => {
    const updateMessage = messageList.filter((message) => message.id !== id);
    setMessageList(updateMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={handleInput}
          />
        </label>
        <button
          className="submit-message-button"
          type="submit"
          onClick={addSubmit}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((message) => (
          <div key={message.id} className="message">
            <h1>{message.message}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleteButton(message.id);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
