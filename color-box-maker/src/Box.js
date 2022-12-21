import React from "react";
import "./Box.css";

const Box = ({ id, width, height, color, removeBox }) => {
  const handleDelete = (e) => {
    removeBox(e.target.getAttribute("id"));
  };
  return (
    <div className="Box-container">
      <div
        className="Box"
        id={id}
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
      <button className="delete-btn" onClick={handleDelete}  id={id} >
        x
      </button>
    </div>
  );
};

export default Box;
