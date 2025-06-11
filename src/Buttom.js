import PropTypes from "prop-types"

export function Button({text, name="User"}){
  return <button onClick={function(){
    console.log("Hola mundo")
  }}>
    {text} {name}
  </button>
}