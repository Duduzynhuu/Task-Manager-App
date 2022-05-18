import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button/Index";
import "./Style.css";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        return navigate("/");
      }

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, [params.id, navigate]);

  const handleBack = () => {
    return navigate(-1);
  };

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="task-details">
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button text="Go Back" color="black" onClick={handleBack} />
    </div>
  );
};

export default TaskDetails;
