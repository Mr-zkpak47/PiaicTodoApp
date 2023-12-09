import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let TaskContent = isEditing ? (
    <>
      <input
        value={task.text}
        onChange={(e) => {
          onChange({
            ...task,
            text: e.target.value,
          });
        }}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </>
  );
  return (
    <>
    <div className="bg-white rounded">
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
          className = "rounded bg-black"
        />
        {task.done ? (
          <span className="bg-blue-500">
            <del>{TaskContent}</del>
          </span>
        ) : (
          <span className="bg-blue-500">{TaskContent}</span>
          )}
        <button onClick={() => onDelete(task.id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </label>
          </div>
    </>
  );
};
export default Task;
