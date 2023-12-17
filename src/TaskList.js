import Task from "./Task";

// const TaskList = ({
//   tasks,
//   onChangeTask,
//   onDeleteTask,
//   isComplete,
//   completeTasks,
//   isAll
// }) => {
//   let tasksToRender;
//   if (isAll) {
//     tasksToRender = tasks;
//   } else if(isComplete) {
//     tasksToRender = completeTasks;
//   }

//   let content;
//   if (tasksToRender && tasksToRender.length > 0) {
//     content = tasksToRender.map((task) => (
//       <li
//         key={task.id}
//         className="bg-white rounded-md shadow-lg flex justify-start items-center w-auto"
//       >
//         <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
//       </li>
//     ));
//   } else {
//     content = <li>No tasks to display.</li>;
//   }

//   return <ul className="flex flex-col gap-y-2 mt-2">{content}</ul>;
// };

const TaskList = ({
  tasks,
  onChangeTask,
  onDeleteTask,
  isComplete,
  isAll,
  isPending,
}) => {
  let tasksToRender;
  if (isAll) {
    tasksToRender = tasks;
  } else if (isComplete) {
    tasksToRender = tasks.filter((task) => task.done);
  } else if (isPending) {
    tasksToRender = tasks.filter((task) => !task.done);
  }

  let content;
  if (tasksToRender && tasksToRender.length > 0) {
    content = tasksToRender.map((task) => (
      <li
        key={task.id}
        className="bg-white rounded-md shadow-lg flex justify-start items-center w-auto"
      >
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
      </li>
    ));
  } else {
    content = <li>No tasks to display.</li>;
  }

  return <ul className="flex flex-col gap-y-2 mt-2">{content}</ul>;
};

export default TaskList;
