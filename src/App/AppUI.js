import React from 'react';
import { Buscador } from '../Buscador';
import { Datos } from '../Datos';
import { Item } from '../Item';
import { List } from '../List';
import { BotonAgregar } from '../BotonAgregar';
import {TransContext} from '../TransContext'

function AppUI() {


    const {newTransacciones} = React.useContext(TransContext);

     return (
        <React.Fragment>
          <h1 className='title'>Registro de Ingreso - Egreso</h1>
          <Buscador/>
          <Datos />
          <List>
            {
              newTransacciones.map(dato=>(
                <Item
                key = {dato.concepto} 
                fecha = {dato.fecha}
                concepto = {dato.concepto}
                tipo = {dato.tipo}
                estado = {dato.estado}
                valor = {dato.valor}
                />
                ))
              }
          </List>  
          <BotonAgregar/>
        </React.Fragment>   
    );
  }
  
  export { AppUI };
  