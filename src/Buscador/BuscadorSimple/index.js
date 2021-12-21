import React from "react";
import './BuscadorSimple.css';

function BuscadorSimple () {
    return(
        <form className="form__container">
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
        </form>
    );
}

export {BuscadorSimple};