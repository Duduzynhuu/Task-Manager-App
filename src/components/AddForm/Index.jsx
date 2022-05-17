import React from "react";
import "./Style.css";
import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      alert("Please Insert a Task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Insert your Task here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Insert Day and Time here"
          value={day}
          onChange={(e) => setDay(e.target.value)}
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
