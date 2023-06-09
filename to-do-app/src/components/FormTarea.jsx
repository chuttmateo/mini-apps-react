/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./FormTarea.module.css";

function FormTarea(props) {
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState("");
  const [selectedPrioridad, setSelectedPrioridad] = useState("");

  const handleChange = (event) => {
    setSelectedPrioridad(event.target.value);
  };

  function handlesubmit(e) {
    e.preventDefault();
    if (selectedPrioridad === "") {
      setError("Selecciona prioridad");
      return;
    }
    if (tarea.trim().length < 5) {
      setError("No seas vago, escribe una tarea más larga");
      return;
    }
    props.guardarTarea({
      id: uuidv4(),
      valor: tarea,
      prioridad: selectedPrioridad,
    });
    setSelectedPrioridad("");
    setError("");
    setTarea("");
  }
  return (
    <>
      <form onSubmit={handlesubmit} className={style.formulario}>
        <input
          type="text"
          className={style.input}
          placeholder="Que hay para hacer"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <select
          className={style.input}
          value={selectedPrioridad}
          onChange={handleChange}
        >
          <option value="">Selecciona Prioridad</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <button type="submit" className={style.btn}>
          Guardar
        </button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </>
  );
}
export default FormTarea;
