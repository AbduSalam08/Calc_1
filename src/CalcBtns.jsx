import React from "react";

const CalcBtns = ({ calcKeys, inputHandler }) => {
  return (
    <div className="calckeys">
      {calcKeys.map((val, idx) => {
        return (
          <button
            key={idx}
            onClick={() => inputHandler(val)}
            className={`${val === "AC" || val === "=" ? "mainBtns" : ""}`}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default CalcBtns;
