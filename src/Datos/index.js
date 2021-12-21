import React from "react";
import './Datos.css'

function Datos () {
    return(
        <article className="data__conatiner">
            <h3 className="data__title">Estadisticas Generales</h3>
            <section className="data__total--complete">
                <div className="total__entry">
                    <p>$ <br/> 16'500.000</p>
                    <span>Ingresos</span>
                </div>
                <div className="total__difference">
                    <p>$ <br/> 16'500.000</p>
                    <span>Total</span>
                </div>
                <div className="total__egress">
                    <p>$ <br/>  16'500.000</p>
                    <span>Egresos</span>
                </div>
            </section>
            <section className="data__total--incomplete">
                <div className="total__entry">
                    <p>$ <br/> 16'500.000</p>
                    <span>Ingresos</span>
                </div>
                <div className="total__difference">
                    <p>$ <br/> 16'500.000</p>
                    <span>Total</span>
                </div>
                <div className="total__egress">
                    <p>$ <br/> 16'500.000</p>
                    <span>Egresos</span>
                </div>
            </section>
            <p>Has completado 5 de 8 transacciones!</p>
        </article>
    );
}

export {Datos}; 