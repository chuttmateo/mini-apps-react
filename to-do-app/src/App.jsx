import { useState } from "react";
import "./App.css";
import FormTarea from "./components/FormTarea";
import ListadoTareas from "./components/ListadoTareas";
import TituloDePagina from "./components/TituloDePagina";
import FormEditarTarea from "./components/FormEditarTarea";

function App() {
  const [tareas, setTareas] = useState([]);
  const [editandotarea, setEditandoTarea] = useState(null);
  function handleEditar(tarea) {
    setEditandoTarea(tarea);
  }
  function guardarTareaEditada(tareaModificada) {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id === tareaModificada.id) {
        return tareaModificada;
      }
      return tarea;
    });
    setTareas(nuevasTareas);
    setEditandoTarea(null); // Reinicia la tarea editada a nulo después de guardar los cambios
  }
  function guardarTarea(tarea) {
    setTareas([...tareas, tarea]);
  }
  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id != id));
  }
  return (
    <>
      <TituloDePagina tareas={tareas} />
      {editandotarea ? (
        <FormEditarTarea
          tarea={editandotarea}
          guardarTarea={guardarTareaEditada}
        />
      ) : (
        <FormTarea guardarTarea={guardarTarea} />
      )}
      {tareas.length > 2 && (
        <button
          onClick={() => setTareas([])}
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
      <ListadoTareas
        tareas={tareas}
        eliminar={eliminarTarea}
        editar={handleEditar}
      />
    </>
  );
}

export default App;
