import React from 'react';
import {render, queryByText, fireEvent} from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<NewTodoForm />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("should display the form", function () {
    const { queryByText } = render(<NewTodoForm />);
    expect(queryByText("Todo:")).toBeInTheDocument();
 
})