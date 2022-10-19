import React, { useState } from 'react';
import {Titulo} from "./TITULO/Titulo"
import { Contador } from "./CONTADOR/Contador"
import { Logica } from "./LÓGICA/Logica"


export function App(){
    const [changeNumber, setChangeNumber]=useState(0)

    const handledAumentar=()=>{
        setChangeNumber(changeNumber+1)
    }

    const handledReset=()=>{
        setChangeNumber(0)
    }
    const handledDisminuir=()=>{
        setChangeNumber(changeNumber-1)
    }

    return(
        <div>
            <Titulo/>
            <Contador numberChange={changeNumber}/>
            <Logica handledAumentar={handledAumentar} handledReset={handledReset} handledDisminuir={handledDisminuir}/> 
        </div>
      
    )

}