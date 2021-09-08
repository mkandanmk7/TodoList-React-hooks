import React from "react";
import "./index.css";

import TodoList from "./compnents/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>To do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
