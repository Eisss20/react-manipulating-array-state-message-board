
import { useState } from "react";

function MessageBoard() {
const [boxArrayUser, setboxArrayUser] = useState([]);
const [inputUser, setInputUser] = useState(""); 

const handleInputUser = (event) => {
  setInputUser(event.target.value)
}

const handleBoxUser = () => {
  const NewinputUser = [...boxArrayUser]
  NewinputUser.push(inputUser)
  setboxArrayUser(NewinputUser) 
}

const deleteTheBox = (index) => {
  const NewinputUser = [...boxArrayUser]
  NewinputUser.splice(index, 1)
  setboxArrayUser(NewinputUser) 
}

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={inputUser}
            onChange={handleInputUser}
            placeholder="Enter message here"
          />
        </label>
        <button className="submit-message-button"onClick={handleBoxUser}>Submit</button>
      </div>
      <div class="board">
      {boxArrayUser.map((text, index) => (
        <div className="message">
          <h1>{text}</h1>
          <button className="delete-button"onClick={deleteTheBox}>x</button>
        </div>
      ))}</div>
    </div>
  );
}

export default MessageBoard;
