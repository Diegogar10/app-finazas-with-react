import React, { useEffect } from "react";
import { TransContext } from "../TransContext";
import './todoForm.css';

function TodoFormEdit (props){


    const [fecha, setFecha] = React.useState('');
    const [valor, setValor] = React.useState('');
    const [tipo, setTipo] = React.useState(false);
    const [concepto, setConcepto] = React.useState('');
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {modifyTransaccion, setOpenModal2} = React.useContext(TransContext);


    useEffect(()=>{
        setFecha(props.fecha.replaceAll('/','-'));
        setValor(props.valor);
        setTipo(props.tipo);
        setConcepto(props.concepto);
    },[])

    const onChange = event => {
        if(event.target.className === 'date__value') setFecha(event.target.value);
        if(event.target.className === 'total__value') setValor(parseInt(event.target.value,10));
        if(event.target.className === 'type__value') {
            if(event.target.value === 'True'){
                setTipo(true);
            }else {
                setTipo(false);
            }
        }
        if(event.target.className === 'form__textArea') setConcepto(event.target.value);
   
    };

    const onCancel = ()=> {
        setOpenModal2(false);
    }

    const onAdd = (event) => {

        const re = /-/gi;
        const str = fecha;
        const formatFecha = str.replace(re, "/");
        
        event.preventDefault();
        modifyTransaccion(formatFecha,concepto,tipo,valor,props.index);
        console.log(formatFecha,concepto,tipo,valor);
        setOpenModal2(false);
    }

    return (
        <form
            className = 'form__container--add' 
            onSubmit = {onAdd}>

                <label className = 'form__title'>Nueva Transacción</label>
                <input
                    className="date__value" 
                    type='date'
                    value = {fecha}
                    onChange = {onChange}
                    required
                />
                <label className="label__date">Fecha</label>
                <input
                    className="total__value"
                    type='text'
                    value = {valor}
                    onChange = {onChange}
                    placeholder="Digite valor"
                    required
                    />
                <label className="label__total">Valor</label>
                <select className="type__value"
                    onChange = {onChange}
                    >
                    <option value='False'>Egreso</option>
                    <option value='True'>Ingreso</option>
                </select>
                <label className="label__type">Tipo transacción</label>
                <input 
                    className = 'form__textArea'
                    type='text'
                    value = {concepto}
                    onChange = {onChange}
                    placeholder='Escribe el concepto'
                    required/>
                
                <div className = 'form__buttons'>
                    <button 
                        type = 'button'
                        onClick = {onCancel} >Cancel</button>
                    <button 
                        className = 'button__add'
                        type = 'submit'>Modificar</button>
                </div>
        </form>
    );
}


export {TodoFormEdit};