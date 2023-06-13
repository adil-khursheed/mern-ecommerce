import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <div>Counter</div>;
};

export default Counter;
