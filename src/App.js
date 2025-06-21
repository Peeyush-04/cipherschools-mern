import { useContext } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskContext, { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />,
  },
  {
    path: "/addtask",
    element: <AddTask />,
  },
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  );
};

export default App;
