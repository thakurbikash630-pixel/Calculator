import React, { useState } from "react";
import "../cal/cal.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonclick = (value) => {
    console.log(value);
    setInput(input + value);
  };

  const handleButtonChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    // evaluating value
    const equal = eval(input);
    console.log(equal);
    // adding history
    setHistory([...history, input + "  =  " + eval(input)]);
    // setting result
    setInput(equal);
  };

  const handleClear = () => {
    const input = "";
    console.log(input);
    setInput(input);
    const history = "";
    setHistory(history);
  };

  return (
    <div className="whole">
      <div className="h">
        {history.length === 0 ? (
          <div className="dis">No item to display</div>
        ) : (
          history.map((item, i) => (
            <div className="first" key={i}>
              <div className="history1">{item}</div>
            </div>
          ))
        )}
      </div>
      <div className="second ">
        <input
          className="mid-input"
          type="text"
          value={input}
          onChange={handleButtonChange}
        />
        <div className="btn-whole">
          <div className="btn1">
            <button onClick={() => handleClear("C")}>C</button>
            <button onClick={() => handleButtonclick("(")}>(</button>
            <button onClick={() => handleButtonclick(")")}>)</button>
            <button onClick={() => handleButtonclick("mod")}>mod</button>
            <button onClick={() => handleButtonclick("n")}>n</button>
          </div>
          <div className="btn2">
            <button onClick={() => handleButtonclick("7")}>7</button>
            <button onClick={() => handleButtonclick("8")}>8</button>
            <button onClick={() => handleButtonclick("9")}>9</button>
            <button onClick={() => handleButtonclick("÷")}>÷</button>
            <button onClick={() => handleButtonclick("√")}>√</button>
          </div>
          <div className="btn3">
            <button onClick={() => handleButtonclick("4")}>4</button>
            <button onClick={() => handleButtonclick("5")}>5</button>
            <button onClick={() => handleButtonclick("6")}>6</button>
            <button onClick={() => handleButtonclick("*")}>*</button>
            <button onClick={() => handleButtonclick("x²")}>x²</button>
          </div>
          <div className="btn4">
            <button onClick={() => handleButtonclick("1")}>1</button>
            <button onClick={() => handleButtonclick("2")}>2</button>
            <button onClick={() => handleButtonclick("3")}>3</button>
            <button onClick={() => handleButtonclick("-")}>-</button>
          </div>

          <div>
            <button onClick={() => handleCalculate()} className="btnlst">
              =
            </button>
          </div>
          <div className="btn5">
            <button onClick={() => handleButtonclick("0")}>0</button>
            <button onClick={() => handleButtonclick(".")}>.</button>
            <button onClick={() => handleButtonclick("%")}>%</button>
            <button onClick={() => handleButtonclick("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
