import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React Basics", completed: false },
    { id: 2, text: "Setup GitHub Repo", completed: true },
    { id: 3, text: "Practice ES6 Features", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (!newTask.trim()) return; // ignore empty input
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle complete / incomplete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "rgba(24, 73, 136, 1)",
      }}
    >
      <h2
        style={{
          backgroundColor: "#1e64d8",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {/* Na My Task Manager App Be This */}
        Team Task Manager
      </h2>

      {/* Input */}
      <div style={{ margin: "15px 0", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Better use sense with you're pressing here oohh... I sha don tell you"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "8px", borderRadius: "5px" }}
        />
        <button
          onClick={addTask}
          style={{
            background: "#1e64d8",
            color: "white",
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "800px",
          }}
        >
          {/* Oya Hit Me */}+ Add
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              textWrap: "wrap",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "yellow" : "black",
              }}
            >
              {task.text}
            </span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button
                onClick={() => toggleComplete(task.id)}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                ✓
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "white" }}>
        Built by Danitek Digital Team - 2025
      </p>
    </div>
  );
}

export default App;
