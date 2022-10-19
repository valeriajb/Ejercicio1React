import React from "react"
import '../LÓGICA/logicaEstilos.css'


//Por parámetro, o "props", entran funciones, para que dependiendo de lo que haga cada función, así mismo se vea reflejado en la página
export function Logica(props){
    return(
        <div className= "buton">
            <button className= "buton-1 butonChildren" onClick={props.handledDisminuir}>Disminuir</button>
            <button className= " buton-2 butonChildren" onClick={props.handledReset}>Restaurar</button>
            <button className= " buton-3 butonChildren" onClick={props.handledAumentar}>Aumentar</button>

        </div>


    )
}