import React from "react";
import { BuscadorSimple } from "./BuscadorSimple";
import { BuscadorAvanzado } from "./BuscadoAvanzado";

function Buscador () {
    return (
        <nav>
            <BuscadorAvanzado/> 
            {
                /* 
                <BuscadorSimple/>
                */
            }
        </nav>
    );
}

export {Buscador};