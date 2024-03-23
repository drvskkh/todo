import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  const [value, setValue] = useState(task.task);

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="обнови задачу"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        обновить
      </button>
    </form>
  );
};
