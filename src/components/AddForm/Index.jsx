import React from "react";
import "./Style.css";
import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      alert("Please Insert a Task");
      return;
    }

    onAdd({ text, day, time, description, reminder, showDescription });
    setText("");
    setDay("");
    setTime("");
    setDescription("");
    setReminder(false);
    setShowDescription(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__control">
        <label>Task</label>
        <input
          type="text"
          placeholder="What is your task?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="form__DayTime">
        <div className="form__control form__DayTime--day">
          <label>Day</label>
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form__control form__DayTime--time">
          <label>Time </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="form__control">
        <label>Description </label>
        <input
          type="text"
          placeholder="Describe your task here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form__control--reminder">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="form__submit" />
    </form>
  );
};

export default AddForm;
