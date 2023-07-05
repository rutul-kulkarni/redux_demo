import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  decreaseCounterBy,
  increaseCounter,
  increaseCounterBy,
} from "./store/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increaseCounter());
  };

  const handleSubtract = () => {
    dispatch(decreaseCounter());
  };

  const handleAddBy = () => {
    dispatch(increaseCounterBy(5));
  };

  const handleSubtractBy = () => {
    dispatch(decreaseCounterBy(5));
  };

  return (
    <>
      <h1>Redux Demo</h1>
      <div className="card">
        <h2>Count is {count}</h2>
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleAddBy}>Add 5</button>
          <button onClick={handleSubtractBy}>Subtract 5</button>
        </div>
      </div>
    </>
  );
}

export default App;
