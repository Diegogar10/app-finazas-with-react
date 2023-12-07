import React from 'react';
import { Buscador } from '../Buscador';
import { Datos } from '../Datos';
import { Item } from '../Item';
import { List } from '../List';
import { BotonAgregar } from '../BotonAgregar';
import {TransContext} from '../TransContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoFormEdit } from '../TodoFormEdit';

function AppUI() {


    const {resultTransacciones, completeTransaccion, deleteTransaccion, editTransaccion, openModal, openModal2, infoModal} = React.useContext(TransContext);
    
     return (
        <React.Fragment>
          <h1 className='title'>Finanzas App <br/> Registra tus movimientos diarios</h1>
          <Buscador/>
          <Datos />
          <List>
            {
              resultTransacciones.map(dato=>(
                <Item
                key = {dato.concepto} 
                fecha = {dato.fecha}
                concepto = {dato.concepto}
                tipo = {dato.tipo}
                estado = {dato.estado}
                valor = {dato.valor}
                onComplete = {()=>completeTransaccion(dato.concepto)}
                onDelete = {()=>deleteTransaccion(dato.concepto)}
                onEdit = {()=>editTransaccion(dato.concepto)}
                />
                ))
              }
          </List>  
          {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
          )}
            
          {openModal2 && (
            <Modal>
                <TodoFormEdit
                  {...infoModal}
                ></TodoFormEdit>
            </Modal>
          )}
          <BotonAgregar/>
        </React.Fragment>   
    );
  }
  
  export { AppUI };
  