import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy, decrementBy } from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
      <button onClick={() => dispatch(decrementBy(5))}>Decrement by 5</button>
    </div>
  );
};

export default Counter;
