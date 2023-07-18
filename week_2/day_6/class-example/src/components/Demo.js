import "./Demo.css";
import React, { useState } from "react";

export default function Demo(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="example-card p-3 m-5">
      <h5>Name: {props.name}</h5>
      <h5>Job Title: {props.title}</h5>
      <div className="text-center">
        <div>{count}</div>
        <button onClick={decrement} className="btn btn-danger me-1 mt-3">
          -
        </button>
        <button onClick={increment} className="btn btn-primary me-1 mt-3">
          +
        </button>
      </div>
    </div>
  );
}
