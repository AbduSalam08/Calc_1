import React from "react";

const CalcBtns = ({ calcKeys, inputHandler }) => {
  return (
    <div className="calckeys">
      {calcKeys.map((val, idx) => {
        return (
          <button key={idx} onClick={() => inputHandler(val)}>
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default CalcBtns;
