import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Contador : {counter}</h1>
      <button
        onClick={() => {
          setCounter(20);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
