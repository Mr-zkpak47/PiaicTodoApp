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
        className={`${isEditing ? "ml-2 border border-gray-500 pl-2 rounded transtion-all hover:outline-none outline-none":""}`}
      />
    </>
  ) : (
    <span>{task.text}</span>
  );
  return (
    <>
      <div className="bg-white rounded flex items-center justify-center content-center rounded-xl transition-all w-full">
        <span className="flex items-center justify-center px-3 py-3 rounded text-base gap-x-3 w-full">
          <label className="flex flex-row items-center gap-x-3 w-full justify-self-start">
            {!isEditing &&
              <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => {
                onChange({
                  ...task,
                  done: e.target.checked,
                });
              }}
              className="rounded bg-black cursor-pointer transition-all"
              />
            }
            {task.done ? (
              <span className={`${!isEditing?"font-medium text-gray-900  transition-all max-w-[150px] text-lg max-h-[30px] w-[150px] overflow-x-hidden overflow-y-scroll break-all scroll-smooth":"overflow-hidden"}`}>
                <del>{TaskContent}</del>
              </span>
            ) : (
              <span className={`${!isEditing?"font-medium text-gray-900 trasition-all text-lg max-w-[150px] w-[150px] max-h-[30px] overflow-x-hidden overflow-y-scroll break-all scroll-smooth":"overflow-hidden"}`}>
                {TaskContent}
              </span>
            )}
          </label>
            {isEditing ? (
              <button onClick={() => setIsEditing(false)}
              className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer transition-all hover:bg-blue-700">Save</button>
            ) : (
              <span className="self-end flex flex-row gap-x-1">
              <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white h-8 w-8 rounded cursor-pointer transition-all hover:bg-blue-700">
              <i class="fa-regular fa-pen-to-square"></i>
              </button>
            <button onClick={() => onDelete(task.id)} className="bg-red-600 text-white h-8 w-8 rounded cursor-pointer transition-all hover:bg-red-700">
              <i class="fa-solid fa-trash"></i>
            </button>
          </span>
            )}
        </span>
      </div>
    </>
  );
};
export default Task;
