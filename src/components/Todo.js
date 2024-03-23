import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={`${"Todo"} ${task.completed ? "completed" : "incomplete"}`}>
      <p onClick={() => toggleComplete(task.id)} className="todoText">
        {task.task}
      </p>

      <div className="actions">
        <div className="btn" onClick={() => editTodo(task.id)}>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H12C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16V15"
              stroke="#D5E3ED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 3.00011L16 6.00011M17.385 4.58511C17.7788 4.19126 18.0001 3.65709 18.0001 3.10011C18.0001 2.54312 17.7788 2.00895 17.385 1.61511C16.9912 1.22126 16.457 1 15.9 1C15.343 1 14.8088 1.22126 14.415 1.61511L6 10.0001V13.0001H9L17.385 4.58511Z"
              stroke="#D5E3ED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="btn" onClick={() => deleteTodo(task.id)}>
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16C1 17.1 1.9 18 3 18H9.91C11.01 18 11.91 17.1 11.91 16L12.91 6C12.91 4.9 12.01 4 10.91 4H2C0.9 4 0 4.9 0 6L1 16ZM11.91 1H9.41L8.7 0.29C8.52 0.11 8.26 0 8 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H11.91C12.46 3 12.91 2.55 12.91 2C12.91 1.45 12.46 1 11.91 1Z"
              fill="#D5E3ED"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
