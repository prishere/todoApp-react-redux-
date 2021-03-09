import "./styles.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>PJ's to-Do List </h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
