/* eslint-disable react/prop-types */
import { useState } from "react"
import style from './FormTarea.module.css'

function FormEditarTarea(props) {
    const [tarea, setTarea] = useState(props.tarea.valor)
    const [error, setError] = useState("")

    function handlesubmit(e) {
        e.preventDefault()
        if(tarea.trim().length < 5){
            setError("Solo para eso la quisiste modificar????, dale 5 o mas letras")
            return
        }
        props.guardarTarea({
            id: props.tarea.id,
            valor: tarea
        })
        setError("")
        setTarea("")

    }
    return(
        <>
            <form onSubmit={handlesubmit} className={style.formulario}>
                <input type="text" className={style.input} placeholder="Que hay para hacer" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
                <button type="submit" className={style.btn}>Guardar</button>
            </form>
            {error && <p className={style.error}>{error}</p>}
        </>
    )
}
export default FormEditarTarea