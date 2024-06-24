import { useState } from "react";

function Buttons(props) {
  let buttonArray = ["AC", "√", "x²", "+",
                      7, 8, 9, "-", 
                      4, 5, 6, "*",
                      1, 2, 3, "÷", 
                      ".", 0, "="]
  
  buttonArray = buttonArray.map(value => (
    <button 
      className={
        value === "=" 
        ? "button-wide" 
        : props.calc.sign === value
        ? "button pressed"
        : "button"
      }
      id={props.calc.sign === value ? "button-pressed" : ""} 
      key={value}
      onClick={props.handleClick}
    >
      {value}
    </button>))
      
  return (
    <div className="buttons">  
      { buttonArray }
    </div>
  )
}

export default Buttons