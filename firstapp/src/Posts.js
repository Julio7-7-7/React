import { VscBug } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={(e) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log("No se encontró esta fuente"));
      }}
    >
      <VscBug></VscBug>Traer datos
    </button>
  );
};
