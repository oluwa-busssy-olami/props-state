import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [stepCount, setStepCount] = useState(1);
  return (
    <>
      {" "}
      {/* you can use the function based component to change state */}{" "}
      {/* the current state componenet, funtion based component */}{" "}
      <div>
        <h1> {count} </h1>{" "}
        <button onClick={() => setCount(count + stepCount)}> Increment </button>{" "}
        <button onClick={() => setCount(count - stepCount)}> Decrement </button>{" "}
        {/* <button onClick={() => setCount(count === 0)}> Reset </button>{" "} */}{" "}
        <input
          type="number"
          value={stepCount}
          onChange={(event) => setStepCount(event.target.value)}
        />{" "}
      </div>{" "}
      <div>
        <h1> Random Number </h1> <h1> {randomNum} </h1>{" "}
        <button onClick={() => setRandomNum(Math.random() * 1000)}>
          {" "}
          Generate Random{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
};

export default Counter;
