import React, { useRef } from "react";
import "../App.css";
import { FaTimes } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Tasks = ({ tasks, setTasks }) => {
  // Download task lists as PDF
  const taskListRef = useRef(null);

  const downloadPdf = () => {
    html2canvas(taskListRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Task-List.pdf");
    });
  };

  // Toggle remainder
  const handleRemainder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, remainder: !taskToToggle.remainder };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: data.remainder } : task
      )
    );
  };

  // Fetch each task to toggle update the remainder status
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  };

  // Delete tasks
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ----------------------------------------------------------------------
  return (
    <>
      <div ref={taskListRef}>
        <h5 style={{ fontWeight: 900, color: "green" }}>Your tasks</h5>
        {tasks &&
          tasks.map((task, i) => (
            <div
              key={i}
              onDoubleClick={() => handleRemainder(task.id)}
              className={`task ${task.remainder ? "remainder" : ""}`}
            >
              <h6>
                {task.text}{" "}
                <FaTimes
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(task.id)}
                />
              </h6>
              <p style={{ fontSize: "12px" }}>{task.dayAndTime}</p>
            </div>
          ))}
      </div>
      <button className="btn add-btn rounded-0" onClick={downloadPdf}>
        Download as PDF
      </button>
    </>
  );
};

export default Tasks;
