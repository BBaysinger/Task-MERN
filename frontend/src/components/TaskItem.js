import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      {new Date(task.createdAt).toLocaleString("en-US")}
      <h2>{task.text}</h2>
      <button onClick={() => dispatch(deleteTask(task._id))} className="close">
        x
      </button>
    </div>
  );
};

export default TaskItem;
