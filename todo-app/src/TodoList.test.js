import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo (todoList, todo="Buy milk") {
    const inputTodo = todoList.getByLabelText("Todo:");
    const btn = todoList.queryByText("Add");
    fireEvent.change(inputTodo, {target: {value: todo}});
    fireEvent.click(btn);
}

it("renders without crashing", function() {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should display the title", function () {
    const { queryByText } = render(<TodoList />);
    expect(queryByText("TodoList")).toBeInTheDocument();
})

it("can add a new todo", function () {
    const todoList = render(<TodoList />);

    //there's onetodo displayed by default
    expect(todoList.queryByText("x")).toBeInTheDocument();

    addTodo(todoList);

    const xButton = todoList.queryAllByText("x");
    expect(xButton.length).toBe(2);
    expect(todoList.queryByText("Buy milk")).toBeInTheDocument();
})