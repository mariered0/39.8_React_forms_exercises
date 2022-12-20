import React from "react";
import "./Box.css";

const Box = ({ id, width, height, color, removeBox }) => {
  const handleDelete = (e) => {
    removeBox(e.target.getAttribute("id"));
  };
  return (
    <>
      <div
        className="Box"
        style={{
          id,
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
      <button onClick={handleDelete} className="delete-btn" id={id}>
        x
      </button>
    </>
  );
};

export default Box;
