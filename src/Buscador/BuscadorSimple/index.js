import React from "react";

function BuscadorSimple () {
    return(
        <form>
            <input type='text'></input>
            <input type='radio' value='0' id="tipo__busqueda"/>
            <label for='tipo__busqueda'> Avanzado </label>
        </form>
    );
}

export {BuscadorSimple};