function Product({ title, name = "User" }) {
  return (
    <h1>
      {title} {name}
    </h1>
  );
}

export function Navegador() {
  return (
    <nav>
      <h1>Hola navegador</h1>
    </nav>
  );
}

export default Product;
