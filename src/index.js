import React from "react";
import { Greeting, UserCard } from "./Greeting";
import ReactDOM from "react-dom/client";
import Product, { Navegador } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Julio Toledo"
      amount={3000}
      married={false}
      points
      {...[99, 3.3, 562.2]}
      address={{ street: "San jose", city: "Camiri" }}
    />
  </>
);
