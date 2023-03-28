import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import PropTypes from "prop-types";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksData = async () => {
      const fetchTasksFromServer = await fetchTasksData();
      setTasks(fetchTasksFromServer);
    };
    getTasksData();
  }, []);

  // Fetch tasks
  const fetchTasksData = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

  // Add task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  // Toggle Form
  const [showForm, setShowForm] = useState(false);
  function onAdd() {
    setShowForm(!showForm);
    document.querySelector(".add-btn").innerText = !showForm ? "Remove" : "Add";
    document
      .querySelector(".add-btn")
      .setAttribute(
        "style",
        !showForm
          ? "background-color: red; color: #fff"
          : "background-color: green; color: #fff"
      );
  }

  // ----------------------------------------------------------------------
  return (
    <>
      <div className="container">
        <Header onAdd={onAdd} />
        {showForm && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <>
            <Tasks tasks={tasks} setTasks={setTasks} />
          </>
        ) : (
          <h3>You have no Tasks.</h3>
        )}
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default App;
