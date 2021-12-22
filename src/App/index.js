import React from 'react';
import { Buscador } from '../Buscador';
import { Datos } from '../Datos';
import { Item } from '../Item';
import { List } from '../List';
import { BotonAgregar } from '../BotonAgregar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1 className='title'>Registro de Ingreso - Egreso</h1>
      <Buscador/>
      <Datos />
      <List>
        <Item clase="item__container--entryIncomplete"/>
        <Item clase="item__container--egressIncomplete"/>
        <Item clase="item__container--entryComplete"/>
        <Item clase="item__container--egressComplete"/>
        <Item clase="item__container--egressComplete"/>
        <Item clase="item__container--egressComplete"/>
        <Item clase="item__container--egressComplete"/>
        <Item clase="item__container--egressComplete"/>
      </List>
      <BotonAgregar/>
    </React.Fragment>
  );
}

export default App;
