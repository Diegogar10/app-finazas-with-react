import React from "react";
import { BuscadorSimple } from "./BuscadorSimple";
import { BuscadorAvanzado } from "./BuscadoAvanzado";

function Buscador () {
    return (
        <nav>
            <BuscadorSimple/>
            <BuscadorAvanzado/>
        </nav>
    );
}

export {Buscador};