import Task from "../Task/Index";

const TaskList = ({ tasks, onDelete, onToggle, onShow }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onShow={onShow}
        />
      ))}
    </>
  );
};

export default TaskList;
