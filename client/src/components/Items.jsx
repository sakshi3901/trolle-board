import { useState } from "react";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

export default function Tasks({ index }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTasks(e) {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return; // No change

    const updatedItems = [...newTask];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);

    setNewTask(updatedItems);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h5>Tasks :-</h5>
        <div class="mt-3 w-100">
          <Droppable droppableId={index}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="item"
                      >
                        <ul>
                          <li class="task-disp p-2" key={index}>
                            {task}
                          </li>
                        </ul>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Tasks"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <button class="btn btn-outline-success" onClick={addTasks}>
            Add Tasks
          </button>
        </div>
      </DragDropContext>
    </div>
  );
}
