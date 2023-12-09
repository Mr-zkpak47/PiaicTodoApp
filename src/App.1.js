import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialItems, NextId } from "./App";

export default function App() {
  const [tasks, setTasks] = useState(initialItems);

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
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => taskId !== t.id));
  };
  return (
    <>
      <section className="bg-yellow-400 flex h-screen w-screen content-center items-center justify-center flex-col">
        <div className="bg-gray-200 rounded-lg shadow-lg shadow-black/40 p-5 flex flex-col justify-center items-center">
          {/* <h1 className="text-2xl text-red-500">Todo List</h1> */}
          <AddTask onAddTask={handleAddTask} />
          {tasks.filter((task) => {
            task.done === true;
          })}
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
