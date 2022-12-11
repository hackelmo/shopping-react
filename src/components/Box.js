import React from "react";

const Box = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        onClick={() => {
          dispatch({ type: "mark-students", payroad: { id } });
        }}
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
      >
        {name}
      </span>
      <button
        onClick={(e) => {
          dispatch({ type: "remove-students", payroad: id });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Box;
