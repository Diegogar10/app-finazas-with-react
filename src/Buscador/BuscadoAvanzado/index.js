import React from "react";
import { TransContext } from "../../TransContext";
import './BuscadorAvanzado.css'

function BuscadorAvanzado ({children}) {

    const {tipoFecha,setTipoFecha} = React.useContext(TransContext);
    const {cadenaCaracteres, setCadena} = React.useContext(TransContext)


    return(
        <form class="form__container--avanzado">
            <section className="search__word">
                <input 
                    type='text'
                    className="form__search"
                    placeholder="Busque por palabra clave"
                    value={cadenaCaracteres}
                    onChange={(e)=>setCadena(e.target.value)}
                    >
                </input>
                <div className="check__container">
                    {children}
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
                    type='date'
                    onChange={(e)=>
                        {
                            var re = /-/gi;
                            var str = e.target.value;
                            var newstr = str.replace(re, "/");
                            console.log(newstr);    
                        }
                    }>
                </input>
                <label> 
                    Fecha 
                </label>
                <input 
                    className={`date__value--end ${ !tipoFecha && 'invisible'}`}
                    type='date'
                    >
                </input>
                <div className="check__container">
                    <input 
                        type='checkbox' 
                        value='0'
                        className="form__radio"
                        defaultChecked = {tipoFecha} 
                        id="rango"
                        onClick={(e)=>setTipoFecha(e.target.checked)}/> 
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