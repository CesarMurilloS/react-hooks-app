import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const EjemploUno = () => {

    const {register, errors, handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data)
        
        setEntradas([
            ...Entradas,
            data
        ])
        // limpiar campos
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="text" 
                className="form-control my-2"
                name="titulo"
                placeholder="Ingrese Titulo"
                ref={register({
                    required: {
                        value: true, 
                        message: 'Nombre es requerido'
                        }, 
                    maxLength: {
                        value: 5, 
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2, 
                        message: 'Mínimo 2 carácteres'
                        }
                })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <input 
                type="text" 
                className="form-control my-2"
                name="descripcion"
                placeholder="Ingrese Descripcion"
                ref={register({
                    required: {
                        value: true, 
                        message: 'Descripcion es requerida'
                        }, 
                    maxLength: {
                        value: 5, 
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2, 
                        message: 'Mínimo 2 carácteres'
                        }
                })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>
                <button 
                type="submit" 
                className="btn btn-primary">
                    Enviar
                </button>
            </form>
            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default EjemploUno
