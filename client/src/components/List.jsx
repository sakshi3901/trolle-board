import { useState } from "react";
import Tasks from "./Items";

export default function List({ index }) {
  const [title, setTitle] = useState("");
  const [titleSubmitted, setTitleSubmitted] = useState(false);

  function onTitleSubmit(e) {
    e.preventDefault();
    setTitleSubmitted(true);
  }
  return (
    <div class="todo-list p-4" id={title}>
      <div>
        {!titleSubmitted ? (
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button class="btn btn-outline-success" onClick={onTitleSubmit}>
              Add Title
            </button>
          </div>
        ) : (
          <h4 class="mb-0">{title}</h4>
        )}
      </div>
      <hr />
      <div>
        <Tasks id={index} />
      </div>
    </div>
  );
}
