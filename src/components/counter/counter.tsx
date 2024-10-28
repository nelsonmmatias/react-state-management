import { FC, useState } from "react";
import "./counter.css";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Simple Counter Example</h1>
      <p>
        Click the button to increase the count. The counter starts at 0 and can
        be reset.
      </p>
      <h2>Current Count: {count}</h2>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={resetCount} style={{ marginLeft: "10px" }}>
        Reset Count
      </button>
    </div>
  );
};
