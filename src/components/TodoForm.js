import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const [value, setValue] = useState("");

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="ну давай, вводи свою задачу"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        добавить
      </button>
    </form>
  );
};
