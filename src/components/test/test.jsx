import { useState } from "react";
// HOOKS
export default function Test() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter += 1));
    console.log(counter);
  };

  const decrement = () => {
    setCounter((counter -= 1));
    console.log(counter);
  };

  return (
    <div
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        backgroundColor: "bisque",
        textAlign: "center",
      }}
    >
      <h1>{counter}</h1>
      <button onClick={() => increment()} style={{ padding: "1rem" }}>
        +
      </button>
      <button onClick={() => decrement()} style={{ padding: "1rem" }}>
        -
      </button>
    </div>
  );
}
