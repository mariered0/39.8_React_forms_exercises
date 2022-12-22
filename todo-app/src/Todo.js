import React from "react";
import "./Todo.css";

const Todo = ({ id, todo, removeTodo }) => {
  const handleDelete = () => {
    removeTodo(id);
  };
  return (
    <div className="Todo-container">
      <li className="Todo" style={{ listStyleType: "none" }}>
        {todo}
      </li>

      <button className="Todo-delete-btn" onClick={handleDelete} id={id}>
        x
      </button>
    </div>
  );
};

export default Todo;
