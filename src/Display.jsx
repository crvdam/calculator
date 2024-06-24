import { useState } from "react";

function Display(props) {
  return (
    <div className="display">
      <div className="display-result">{props.value}</div>
    </div>
  )
}

export default Display