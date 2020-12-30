import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = (props) => {
    return (
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                <Avatar urlImagen={props.sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{props.sujeto.nombre}</h5>
                    <p>{props.sujeto.texto}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Comentario
