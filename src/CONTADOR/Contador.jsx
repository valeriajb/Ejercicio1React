import React from "react";
import '../CONTADOR/contadorEstilos.css'

export function Contador({ numberChange}){ 
    return(
        <h5 className="contadorContainer">{numberChange}</h5>
    )
}