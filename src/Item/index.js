import React from "react";
import './Item_entry_incomplete.css';
import './Item_egress_incomplete.css';
import './Item_entry_complete.css'
import './Item_egress_complete.css'


function Item ({clase}) {
    return (
        <li className={clase}>
            <section className="item__data">
                <button className="button">✔</button>
                <p className="text">Pago de Nomina mes, consignacion banco</p>
                <p className="price">$1'500.000</p>
                <span className="date">12/2/2021</span>
            </section>
            <section className="item__close">
                <button>
                    
                </button>
            </section>
        </li>
    );
}

export {Item}; 