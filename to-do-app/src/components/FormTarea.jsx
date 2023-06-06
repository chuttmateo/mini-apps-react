/* eslint-disable react/prop-types */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import style from './FormTarea.module.css'

function FormTarea(props) {
    const [tarea, setTarea] = useState("")
    const [error, setError] = useState("")

    function handlesubmit(e) {
        e.preventDefault()
        if(tarea.trim().length < 5){
            setError("No seas vago, escribe una tarea más larga")
            return
        }
        props.guardarTarea({
            id: uuidv4(),
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
export default FormTarea