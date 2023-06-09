/* eslint-disable react/prop-types */
import { useEffect } from "react";

function TituloDePagina({ tareas }) {
  let titulo = `${tareas.length} Tareas Pendientes`;
  if (tareas.length < 2) {
    titulo = `${tareas.length} Tarea Pendiente`;
  }
  if (tareas.length == 0) {
    titulo = "TO DO APP";
  }
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
}
export default TituloDePagina;
