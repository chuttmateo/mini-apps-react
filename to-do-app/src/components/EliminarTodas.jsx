/* eslint-disable react/prop-types */
function EliminarTodas(props) {
    return(
        <>
        {props.tareas.length > 2 && (
        <button
          onClick={props.onEliminar}
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "white",
            border: "none",
            fontSize: "20px",
          }}
        >
          Eliminar Todas
        </button>
      )}
        </>
    )
}
export default EliminarTodas