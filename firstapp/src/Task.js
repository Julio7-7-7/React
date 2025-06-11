import "./task.css"

export function TaskCard(props) {
  const titleStyles = { fontWeight: "lighter" }
  return (
    <div className="card">
      <h1 className="title">Hola mundo</h1>
      <span className={props.ready ? "tareaRealizada" : "tareaIncompleta"}>                
        {props.ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  )
}