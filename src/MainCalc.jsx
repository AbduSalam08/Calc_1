import React, { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcBtns from "./CalcBtns";
import "./calculator.css";

const MainCalc = () => {
  const [res, setRes] = useState("");

  const findAnswer = () => {
    //both results are saved in results variable

    //this method is using eval function - which converts a string to an expression
    // let result = eval(res);

    //this method is using Function Interface method- which cretes a funtion without name in runtime and converts and returns the given string to an expression
    let result = Function("return " + res)();

    setRes(result.toString());
  };

  const calcKeys = [
    "C",
    "%",
    "^",
    "AC",
    "9",
    "8",
    "7",
    "+",
    "6",
    "5",
    "4",
    "*",
    "3",
    "2",
    "1",
    "-",
    "0",
    ".",
    "/",
    "=",
  ];

  const inputHandler = (inp) => {
    if (inp === "AC") setRes("");
    else if (inp === "C") {
      let n = res.length;
      if (n > 0) setRes(res.slice(0, n - 1));
    } else if (inp === "=") findAnswer();
    else if (res === "Infinity") {
      setRes("");
      return;
    } else setRes(res.concat(inp));
  };

  return (
    <div className="calcWrap">
      <CalcDisplay result={res} />
      <CalcBtns calcKeys={calcKeys} inputHandler={inputHandler} />
    </div>
  );
};

export default MainCalc;
