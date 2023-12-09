import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState(initialItems);
  const [complete, setComplete] = useState(
    calculateCompletedCount(initialItems)
  );

  useEffect(() => {
    // Update completed tasks count whenever tasks change
    setComplete(calculateCompletedCount(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: NextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? task : t))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
    // No need to update completed tasks count here
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

// Function to calculate the count of completed tasks
const calculateCompletedCount = (tasks) => tasks.filter((task) => task.done).length;
