import React, { useState } from "react";

export default function SpotCheck1() {
  let [counter, setCounter] = useState(0);

  let addLike = () => {
    setCounter(counter + 1);
  };
  let removeLike = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <p>{counter}</p>
        <button onClick={addLike}>+</button>
        <button onClick={removeLike}>-</button>
      </div>
    </div>
  );
}
