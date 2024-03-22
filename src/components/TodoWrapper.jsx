import React, { useState } from "react";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    // TODO:
    setTodos([...todos, {}]);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
    </div>
  );
};
