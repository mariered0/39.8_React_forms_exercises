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

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id != id;
    });

    //update state
    setTodo((todos) => [...updatedTodos]);
  };

  const todoComponents = todos.map(todo => (
    <Todo
      id={todo.id}
      key={todo.key}
      todo={todo.todo}
      removeTodo={removeTodo}
       />   
  ))

  return (
    <div className="TodoList-container">
      <h1>TodoList</h1>
      <NewTodoForm addTodo={addTodo} />
      <div>
        <ul>
          {todoComponents}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
