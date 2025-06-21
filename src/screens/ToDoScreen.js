import { useContext } from "react";
import Task from "../components/Task";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const ToDoScreen = () => {
  const { taskList } = useContext(TaskContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <h1 className="center ui heading">Welcome to ToDo List Page!</h1>
        <div>
          <button
            onClick={(e) => {
              navigate("/addtask");
            }}
            className="ui secondary button"
          >
            Add Task
          </button>
          <section>
            <div className="ui cards">
              {taskList.map((task) => (
                <Task task={task} key={task.taskId} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ToDoScreen;
