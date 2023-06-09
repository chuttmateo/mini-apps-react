import { useState } from "react";
import "./App.css";
import FormTarea from "./components/FormTarea";
import ListadoTareas from "./components/ListadoTareas";
import TituloDePagina from "./components/TituloDePagina";
import FormEditarTarea from "./components/FormEditarTarea";
import EliminarTodas from "./components/EliminarTodas";

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
    setEditandoTarea(null);
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
      <h1 style={{fontSize: "55px"}}>The real lista, bro</h1>
      {editandotarea ? (
        <FormEditarTarea
          cancelar={() => setEditandoTarea(null)}
          tarea={editandotarea}
          guardarTarea={guardarTareaEditada}
        />
      ) : (
        <FormTarea guardarTarea={guardarTarea} />
      )}
      <EliminarTodas tareas={tareas} onEliminar={()=>setTareas([])}/>
      <ListadoTareas
        tareas={tareas}
        eliminar={eliminarTarea}
        editar={handleEditar}
      />
    </>
  );
}

export default App;
