import ReactDOM from "react-dom/client";
// import React, { useState } from "react";
// import { Greeting, UserCard } from "./Greeting";
// import Product, { Navegador } from "./Product";
// import { Button } from "./Buttom";
// import { TaskCard } from "./Task";
// import { Posts } from "./Posts";
import { Counter } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const handleChange = (e) => {
//     console.log(e.target.value + "...waos")
//   }

// const user = [
//   {
//     id: 1,
//     name: "Julio Toledo",
//     image: "https://robohash.org/user%202",
//   },

//   {
//     id: 2,
//     name: "César Vaca",
//     image: "https://robohash.org/user%203",
//   },

//   {
//     id: 3,
//     name: "Dimitri Karamazov",
//     image: "https://robohash.org/user%206",
//   },
// ];

root.render(
  <>
    {/* <UserCard
      name="Julio Toledo"
      amount={3000}
      married={false}
      points
      {...[99, 3.3, 562.2]}
      address={{ street: "San jose", city: "Camiri" }}
    /> */}
    {/* 
  <Button text="Click me"/>      
  <Button text="Pay"/>      
  <Button text="Go to" name="React App"/>       */}
    {/* <input id="hola" onChange={handleChange} */}
    {/* <TaskCard ready={true} /> */}
    {/* <Button text="Hola" name="Julius" /> */}
    {/* <input id="hola" on></input> */}
    {/* <form onSubmit={(e) => {
      e.preventDefault()
      alert("Enviado")
    }}>
      <h1>Formulario de usuario</h1>
      <button>Enviar</button>
    </form> */}

    {/* <Posts></Posts> */}

    {/* {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })} */}

    <Counter />
  </>
);
