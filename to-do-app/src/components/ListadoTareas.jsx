/* eslint-disable react/prop-types */
import style from './ListadoTareas.module.css'

function ListadoTareas(props) {
    return(
        <><div className={style.tareas}>
            {props.tareas.map((tarea) => {
                return (
                    <div key={tarea.id} className={style.tarea}>
                        <h2>{tarea.valor}</h2>
                        <button className={style.eliminar} onClick={()=>{props.eliminar(tarea.id)}}>Eliminar</button>
                        <button className={style.editar} onClick={()=>{props.editar(tarea)}}>Editar</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default ListadoTareas