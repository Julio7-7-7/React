import { useState, useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div>
      <h1>Contador : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
      <hr></hr>
    </div>
  );
}

export function Usuario() {
  const [mensaje, setMensaje] = useState("");
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>
    </div>
  );
}
