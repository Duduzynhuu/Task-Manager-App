import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

const Task = ({ task, onDelete, onToggle, onShow }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="task-top" onClick={() => onShow(task.id)}>
        <div className="task-title">
          <h3>{task.text}</h3>
        </div>
        <div className="task-icons">
          <Link to={`/task/${task.id}`}>
            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "black" }} />
          </Link>
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </div>
      <p>
        {task.day} at {task.time}
      </p>
      {task.showDescription && <p>{task.description}</p>}
    </div>
  );
};

export default Task;
