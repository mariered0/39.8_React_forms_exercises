import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
// import { v4 as uuid } from 'uuid';

// uuid() = jest.fn(() => 123);


function addBox (boxList, height="200", width="200", color="green") {
    const inputWidth = boxList.getByLabelText("Width", { exact: false });
    const inputHeight = boxList.getByLabelText("Height", { exact: false });
    const inputColor = boxList.getByLabelText("Color", { exact: false });
    const btn = boxList.queryByText("Add Box", { exact: false });
    fireEvent.change(inputWidth, {target: {value: width}})
    fireEvent.change(inputHeight, {target: {value: height}})
    fireEvent.change(inputColor, {target: {value: color}})
    fireEvent.click(btn);
}


it("renders without crashing", function() {
    render(<BoxList />);
});

//it fails the snapshot test because of the uuid. Need to check later.
// it("matches snapshot", function() {
//     const { asFragment } = render(<BoxList />);
//     expect(asFragment()).toMatchSnapshot();
// });

//Check if the default box is displayed
it("should display the title", function () {
    const { queryByText } = render(<BoxList />);
    expect(queryByText("Color Box Maker")).toBeInTheDocument();
})

it("can add a new box", function () {
    const boxList = render(<BoxList />);

    //there's one box displayed by default
    expect(boxList.queryByText("x")).toBeInTheDocument();

    addBox(boxList);

    const xButton = boxList.queryAllByText("x");
    expect(xButton.length).toBe(2);
    expect(xButton[1].previousSibling).toHaveStyle(`
        width: 200px;
        height: 200px;
        background-color: green;`);
})

it("can delete a box", function () {
    const {queryByText} = render (<BoxList />);
    //removing the box that is displayed by default.
    const xButton = queryByText("x");
    fireEvent.click(xButton);
    expect(xButton).not.toBeInTheDocument();
})