import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [dayAndTime, setDayAndTime] = useState("");
  const [time, setTime] = useState("");
  const [remainder, setRemainder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!text || !dayAndTime) {
      alert("Please add task");
      return;
    }

    onAdd({
      text: text[0].toUpperCase() + text.substring(1),
      dayAndTime: getFormattedTime(dayAndTime),
      remainder,
    });

    setText("");
    setDayAndTime("");
    setRemainder(false);
  }

  function getFormattedTime(date) {
    const now = new Date(date);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = now.getDate();
    const month = monthNames[now.getMonth()];

    // Get the hours and minutes from the input time string
    const [hours, minutes] = time.split(":");

    let formattedHours = parseInt(hours, 10);
    const amOrPm = formattedHours >= 12 ? "pm" : "am";
    formattedHours = formattedHours % 12;
    formattedHours = formattedHours ? formattedHours : 12;

    const formattedTime = `${month} ${day} at ${formattedHours}:${minutes} ${amOrPm}`;
    return formattedTime;
  }

  // ----------------------------------------------------------------------
  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="Task">Your Task</label>
          <input
            className="w-100"
            type="text"
            placeholder="Add Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="Task">Day & Time</label>
          <input
            type="date"
            placeholder="Add Day & Time"
            value={dayAndTime}
            onChange={(e) => {
              setDayAndTime(e.target.value);
            }}
          />
          <input
            type="time"
            placeholder="Add Day & Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        <div className="form-control form-control-check">
          <label htmlFor="Task">Set Remainder</label>
          <input
            type="checkbox"
            checked={remainder}
            value={remainder}
            onChange={(e) => setRemainder(e.currentTarget.checked)}
          />
        </div>

        <input
          type="submit"
          value="Save Task"
          className="btn btn-block rounded-0"
        />
      </form>
    </>
  );
};

export default AddTask;
