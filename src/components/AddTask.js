import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  let handelInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
    navigate('/');
  };

  return (
    <section className="screen">
      <div className="ui form">
        <h3>Add new Task!</h3>
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Task title.."
              spellCheck={false}
              data-ms-editor={true}
              name="title"
              onChange={handelInputChange}
              value={task.title}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              rows="2"
              spellCheck={false}
              data-ms-editor={true}
              name="description"
              placeholder="Task description.."
              onChange={handelInputChange}
              value={task.description}
            ></textarea>
          </div>
          <button type="submit" className="ui primary button">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
