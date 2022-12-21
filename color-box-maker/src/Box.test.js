import React from "react";
import { render, queryByText } from "@testing-library/react";
import Box from "./Box";


it("renders without crashing", function() {
    render(<Box />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
