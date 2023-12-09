import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState(initialItems);
  const [complete, setComplete] = useState(
    initialItems.filter((item) => item.done).length
  );

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: NextId++,
        text: text,
        done: false,
      },
    ]);
    setComplete(complete + 1); // Increment completed tasks count on addition
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
    setComplete(task.done ? complete - 1 : complete + 1); // Update completed tasks count
  };

  const handleDeleteTask = (taskId) => {
    const deletedTask = tasks.find((t) => t.id === taskId);
    setTasks(tasks.filter((t) => taskId !== t.id));
    setComplete(deletedTask.done ? complete - 1 : complete); // Update completed tasks count
  };

  return (
    <>
      <section className="bg-yellow-400 flex h-screen w-screen content-center items-center justify-center flex-col">
        <div className="bg-gray-200 rounded-lg shadow-lg shadow-black/40 p-5 flex flex-col justify-center items-center">
          <AddTask onAddTask={handleAddTask} />
          <span className="text-lg font-semibold self-start text-gray-800 mb-1">
            You have <span className="text-blue-500">{complete}</span> tasks to complete.
          </span>
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </section>
    </>
  );
}

let NextId = 3;
const initialItems = [
  {
    id: 0,
    text: "Learn React",
    done: true,
  },
  {
    id: 1,
    text: "Learn TypeScript",
    done: false,
  },
  {
    id: 2,
    text: "Learn Tailwindcss",
    done: false,
  },
];
