import React from "react";
import { render, queryByText, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";


it("renders without crashing", function() {
    render(<NewBoxForm />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("should display the form", function () {
    const { queryByText } = render(<NewBoxForm />);
    expect(queryByText("width", { exact: false })).toBeInTheDocument();
    expect(queryByText("height", { exact: false })).toBeInTheDocument();
    expect(queryByText("color", { exact: false })).toBeInTheDocument();
    expect(queryByText("Add Box", { exact: false })).toBeInTheDocument();
});

