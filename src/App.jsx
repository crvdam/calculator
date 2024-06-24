import { useState } from 'react'
import React from 'react'
import './styles.css'
import Display from './Display'
import Buttons from './Buttons'

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    number: 0,
    result: 0,
  })

  function handleClick(e) {
    const input = e.target.innerHTML
    input === "AC" 
    ? allClearHandle()
    : input === "+" || input === "-" || input === "÷" || input === "*"
    ? signHandle(input)
    : input === "√" || input === "x²"
    ? squareHandle(input)
    : input === "."
    ? decimalHandle(input)
    : input === "="
    ? equalHandle()
    : numberHandle(input)
  }
  
  function allClearHandle() {
    setCalc({
      ...calc,
      sign: "",
      number: 0,
      result: 0,
    })
  }

  function signHandle(input) {
    setCalc({
      ...calc,
      sign: input,
      result: !calc.result && calc.number ? calc.number : calc.result,
      number: 0,
    })
  }

  function squareHandle(input) {
    let tempNum = calc.number ? calc.number : calc.result
    console.log(tempNum)
    setCalc({
      ...calc,
      sign: "", 
      result: 
        input === "x²" 
        ? tempNum * tempNum 
        : Math.sqrt(tempNum),
      number: 0,
    })
  }

  function decimalHandle(input) {
    setCalc({
      ...calc,
      number: 
        !calc.number.toString().includes(".") 
        ? calc.number + input 
        : calc.number
    })
  }

  function equalHandle() {
    if (calc.sign && calc.number) {
      const math = (a, b, sign) =>
        sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "*"
        ? a * b
        : a / b;
    
      setCalc({
        ...calc,
        result: math(Number(calc.result), Number(calc.number), calc.sign),
        sign: "",
        number: 0,
      })
    }
  }

  function numberHandle(input) {
    setCalc({
      ...calc, 
      number: 
        calc.number === 0 && input === "0"
        ? "0"
        : calc.number % 1 === 0  
        ? Number(calc.number + input) 
        : calc.number + input,
      result: !calc.sign ? 0 : calc.result})
  }

  console.log(calc)

  return (
    <div className="calculator">
      <Display value={calc.number ? calc.number : calc.result} />
      <Buttons calc={calc} handleClick={handleClick} />
    </div>
  )
}
 
export default App
