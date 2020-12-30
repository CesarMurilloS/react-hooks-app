import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            //Hacer copia de los datos
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' - ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese Nombre"
                    name="nombre"
                    onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ingrese Apellido"
                    name="apellido"
                    onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    )
}

export default Formulario;
