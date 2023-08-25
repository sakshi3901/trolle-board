import { useState } from "react";
import Lists from "./components/Lists";

export default function HomePage() {
  const [newBoard, setNewBoard] = useState("");
  const [boardNameSubmitted, setBoardNameSubmitted] = useState(false);

  function onBoardSubmit(e) {
    e.preventDefault();
    setBoardNameSubmitted(true);
  }
  return (
    <div>
      {!boardNameSubmitted ? (
        <div class="input-group my-3 w-20">
          <input
            type="text"
            placeholder="New Board Name"
            value={newBoard}
            onChange={(e) => {
              setNewBoard(e.target.value);
            }}
          />
          <button class="btn btn-outline-secondary" onClick={onBoardSubmit}>
            Create Board
          </button>
        </div>
      ) : (
        <h2>{newBoard}</h2>
      )}
      <div>
        <Lists />
      </div>
    </div>
  );
}
