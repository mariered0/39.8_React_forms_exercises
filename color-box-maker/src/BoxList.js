import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), width: 200, height: 200, color:"magenta"}
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (id) => {
    //make a copy of the box array
    const updatedBoxes = boxes.filter(function(box) {
        return box.id !== id;
    })
    //update state
    setBoxes((boxes) => [...updatedBoxes]);
  }

  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={parseInt(box.width)}
      height={parseInt(box.height)}
      color={box.color}
      removeBox={removeBox}
      />
  ))

  return (
    <div className="BoxList">
      <h1>Color Box Maker</h1>
      <div className="BoxList-container">
        {/* {boxes.map(({ width, height, color }) => (
          <Box width={parseInt(width)} height={parseInt(height)} color={color} removeBox={removeBox} />
        )
        )} */}
        {boxComponents}
      </div>
    
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
