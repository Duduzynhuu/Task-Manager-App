import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Index";
import TaskList from "./components/TaskList/Index";
import Task from "./components/Task/Index";
import Footer from "./components/Footer/Index";
import About from "./components/About/Index";
import AddForm from "./components/AddForm/Index";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const invertShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  const location = useLocation();
  return (
    <div className="App">
      <div className="task-manager">
        {showAddTask ? (
          <Header onShow={invertShowAddTask} text="Close" color="red" />
        ) : (
          <Header onShow={invertShowAddTask} text="Add" color="green" />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddForm onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  >
                    <Task
                      task={tasks}
                      onDelete={deleteTask}
                      onToggle={toggleReminder}
                    />
                  </TaskList>
                ) : (
                  "No Tasks to SHOW"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        {location.pathname === "/" && <Footer />}
      </div>
    </div>
  );
}

export default App;
