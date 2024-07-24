import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  return (
    <div className="task">
      {new Date(task.createdAt).toLocaleString("en-US")}
      <h2>{task.text}</h2>
    </div>
  );
};

export default TaskItem;
