/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./FormTarea.module.css";

function FormEditarTarea(props) {
  const [tarea, setTarea] = useState(props.tarea.valor);
  const [selectedPrioridad, setSelectedPrioridad] = useState(props.tarea.prioridad)
  const [error, setError] = useState("");


  const handleChange = (event) => {
    setSelectedPrioridad(event.target.value);
  };
  function handlesubmit(e) {
    e.preventDefault();
    if (tarea.trim().length < 5) {
      setError("Solo para eso la quisiste modificar????, dale 5 o mas letras");
      return;
    }
    props.guardarTarea({
      id: props.tarea.id,
      valor: tarea,
      prioridad: selectedPrioridad
    });
    setError("");
    setTarea("");
  }
  return (
    <>
      <form onSubmit={handlesubmit} className={style.formulario}>
        <button className={style.btnCancelar} onClick={props.cancelar}>
          Cancelar Edición
        </button>
        <input
          type="text"
          className={style.input}
          placeholder="Editando Tarea"
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
export default FormEditarTarea;
