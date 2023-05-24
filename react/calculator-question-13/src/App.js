import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearResult = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <button className="btn clear" onClick={() => clearResult()}>
        Clear
      </button>
      <div className="buttons">
        <button className="btn" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="btn operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="btn" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="btn operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="btn" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="btn operator" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="btn" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="btn zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="btn equals" onClick={() => calculateResult()}>
          =
        </button>
        <button className="btn operator" onClick={() => handleClick("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
