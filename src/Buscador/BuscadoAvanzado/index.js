import React from "react";

function BuscadorAvanzado () {
    return(
        <form>
            <section>
                <input type='text'></input>
                <input type='radio' value='0' id="tipo__busqueda"/>
                <label for='tipo__busqueda'> Avanzado </label>
            </section>
            <section>
                <input type='date'></input>
                <input type='date'></input>
                <input type='radio' value='0' id="rango"/>
                <label for='rango'> Rango </label>
                <label> Fecha </label>
            </section>
            <section>
                <select>
                    <option>Completada</option>
                    <option>Incompleta</option>
                </select>
                <label>Estado</label>
            </section>

        </form>
    );
}

export {BuscadorAvanzado};