import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-row justify-center gap-x-3 mb-3">
        <div className="flex relative justify-center">
        <input
        className="bg-transparent outline-none h-7 pl-1 font-semibold text-sm w-[190px]"
        placeholder="Add Task"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        />
        <hr className="absolute bottom-0 left-0 bg-blue-400 w-full h-[3px] rounded-xl"></hr >
        </div>
        <button
        className="h-8 w-20 bg-blue-500 text-white font-semibold rounded text-base hover:bg-blue-600 transition-all"
          type="button"
          onClick={() => {
            setText("");
            onAddTask(text);
            //   console.log(text)
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default AddTask;
