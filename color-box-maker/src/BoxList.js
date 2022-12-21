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

  const removeBox = (target) => {
    //make a copy of the box array
    const updatedBoxes = boxes.filter(function(box) {
        return box.id !== target;
    })
    //update state
    setBoxes((boxes) => [...updatedBoxes]);
  }

  return (
    <div className="BoxList">
      <h1>Color Box Maker</h1>
      <div className="BoxList-container">
        {boxes.map(({ id, width, height, color }) => (
          <Box id={id} key={id} width={parseInt(width)} height={parseInt(height)} color={color} removeBox={removeBox} />
        )
        )}
      </div>
    
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
