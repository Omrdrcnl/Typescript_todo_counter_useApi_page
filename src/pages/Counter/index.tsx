import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="text-center">
      <h1 className="">Counter Page</h1>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="btn btn-block px-5 m-5 btn-success btn-lg"
      >
        +
      </button>
      <h1>{counter}</h1>

      <button
        type="button"
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="btn btn-block px-5 btn-danger m-5 btn-lg"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
