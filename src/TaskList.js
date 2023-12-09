import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="flex flex-col gap-y-2 mt-2">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="bg-white rounded-md shadow-lg flex justify-start items-center w-auto">
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
