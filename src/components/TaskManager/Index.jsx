import React from "react";
import Header from "../Header/Index";
import TaskList from "../TaskList/Index";
import AddForm from "../AddForm/Index";
import Footer from "../Footer/Index";
import About from "../About/Index";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Style.css";

const TaskManager = ({
  tasks,
  onDelete,
  onToggle,
  onAdd,
  onShow,
  setOnShow,
  onShowInverted,
}) => {
  const location = useLocation();
  return (
    <div className="task-manager">
      {onShow ? (
        <Header onShow={onShowInverted} text="Close" color="red" />
      ) : (
        <Header onShow={() => setOnShow(!onShow)} text="Add" color="green" />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {onShow && <AddForm onAdd={onAdd} />}
              {tasks.length > 0 ? (
                <TaskList
                  tasks={tasks}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
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
  );
};

export default TaskManager;
