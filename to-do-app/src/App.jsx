import { useState } from "react";
import "./App.css";
import FormTarea from "./components/FormTarea";
import ListadoTareas from "./components/ListadoTareas";
import TituloDePagina from "./components/TituloDePagina";

function App() {
  const [tareas, setTareas] = useState([]);
  function guardarTarea(tarea) {
    setTareas([...tareas, tarea]);
  }
  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id != id));
  }
  return (
    <>
      <TituloDePagina tareas={tareas} />
      <FormTarea guardarTarea={guardarTarea} />
      {tareas.length > 2 && (
        <button
          onClick={() => setTareas([])}
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "white",
            border: "none",
            fontSize: "20px"
          }}
        >
          Eliminar Todas
        </button>
      )}
      <ListadoTareas tareas={tareas} eliminar={eliminarTarea} />
    </>
  );
}

export default App;
