import React from "react";
import './BuscadorAvanzado.css'

function BuscadorAvanzado () {
    return(
        <form class="form__container--avanzado">
            <section className="search__word">
                <input 
                    type='text'
                    className="form__search"
                    placeholder="Busque por palabra clave">
                </input>
                <div className="check__container">
                    <input 
                        type='checkbox' 
                        value='0' 
                        className="form__radio"
                        id="tipo__busqueda"/>
                    <label 
                        for='tipo__busqueda'
                        className="form__radioText"> 
                        Avanzado 
                    </label>
                </div>
            </section>
            <section className="search__date">
                <input
                    className="date__value--start" 
                    type='date'>
                </input>
                <label> 
                    Fecha 
                </label>
                <input 
                    className="date__value--end"
                    type='date'
                    >
                </input>
                <div className="check__container">
                    <input 
                        type='checkbox' 
                        value='0'
                        className="form__radio" 
                        id="rango"/> 
                    <label 
                        for='rango'
                        className="form__radioText"> 
                        Rango 
                    </label>
                </div>
            </section>
            <section className="search__state">
                <label>Estado</label>
                <select className="state__options">
                    <option>Completa</option>
                    <option>Incompleta</option>
                </select>
            </section>

        </form>
    );
}

export {BuscadorAvanzado};