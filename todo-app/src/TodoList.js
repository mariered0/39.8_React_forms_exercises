import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [{ id: uuid(), todo: "Feed cats" }];
  const [todos, setTodo] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodo((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };

  const removeTodo = (target) => {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id != target;
    });

    //update state
    setTodo((todos) => [...updatedTodos]);
  };

  return (
    <div className="TodoList-container">
      <h1>TodoList</h1>
      <NewTodoForm addTodo={addTodo} />
      <div>
        <ul>
          {todos.map(({ id, todo }) => (
            <Todo id={id} key={id} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
