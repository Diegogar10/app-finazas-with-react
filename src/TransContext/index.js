import React from "react";
import {useLocalStorage} from "./useLocalStorage"

const TransContext = React.createContext();
const transacciones = [
  {
    fecha:'2021/12/20',
    concepto:'Consignacion Banco1',
    tipo:false,
    estado:false,
    valor:1500000
  },
  {
    fecha:'2021/05/21',
    concepto:'Consignacion Banco2',
    tipo:true,
    estado:false,
    valor:1500000
  },
  {
    fecha:'2021/02/02',
    concepto:'Consignacion Banco3',
    tipo:false,
    estado:true,
    valor:1500000
  },
  {
    fecha:'2021/05/15',
    concepto:'Consignacion Banco4',
    tipo:true,
    estado:true,
    valor:1500000
  },
  
]

const buscaTransacciones = (cadenaTexto,transacciones)=>{
  if(!cadenaTexto.length >= 1){
    return transacciones;
  }else {
    transacciones = transacciones.filter((e)=>{
      const textoBusqueda = cadenaTexto.toLowerCase();
      const textoTransacciones = e.concepto.toLowerCase();
      return textoTransacciones.includes(textoBusqueda);
    })
  }
  return transacciones;
}


function TransProvider(props) {

  const [tipoBuscador, setTipoBuscador] = React.useState(false);
  const [tipoFecha, setTipoFecha] = React.useState(false);
  const [cadenaCaracteres,setCadena] = React.useState('');
  
  const newTransacciones = buscaTransacciones(cadenaCaracteres, transacciones);
   
  return (
    <TransContext.Provider value={
        {
          newTransacciones,
          tipoBuscador,
          setTipoBuscador,
          tipoFecha,
          setTipoFecha,
          cadenaCaracteres,
          setCadena
        }
    }>
        {props.children}
    </TransContext.Provider>
  )
}

export {TransContext, TransProvider}