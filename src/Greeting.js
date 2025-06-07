export function Greeting() {
  return <h1>Componente de React</h1>;

  // const married = true;

  // if (married) {
  //   return <h1>Hola casado</h1>
  // }
  // else {
  //   return <h1>Hola soltero</h1>
  // }

  // return <h1>{married ? "hola casado" : "hola soltero"}</h1>;

  // const user = {
  //   firstName: "Ryan",
  //   lastName: "Ray",
  // };

  // return (
  //   <div>
  //     <h1>{user.firstName}</h1>
  //     <h2>{user.lastName}</h2>
  //   </div>
  // );

  // const married = true;

  // return (
  //   <div>
  //     <h1>{married.toString()}</h1>
  //   </div>
  // );

  //   function sumar(x, y) {
  //     return x + y;
  //   }

  //   return <h1>{sumar(20, 30)}</h1>;
}

export function UserCard(props) {
  return (
    <div>
      <h1>Nombre: {props.name}</h1>
      <p>Monto en 💲: {props.amount}$</p>
      <p>Estado civil: {props.married ? "casado" : "soltero"}</p>
      <ul>
        <li>Ciudad: {props.address.city}</li>
        <li>Barrio: {props.address.street}</li>
      </ul>
    </div>
  );
}
