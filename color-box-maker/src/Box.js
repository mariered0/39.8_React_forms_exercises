import React from "react";
import "./Box.css";

const Box = ({ id, width, height, color, removeBox }) => {
  const handleDelete = (id) => {
    removeBox(id);
  };
  return (
    <div className="Box-container">
      <div
        className="Box"
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
      <button className="delete-btn" onClick={handleDelete}  >
        x
      </button>
    </div>
  );
};

export default Box;
