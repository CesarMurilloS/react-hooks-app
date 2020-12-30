import React, { Fragment } from 'react'

const Avatar = (props) => {
    return (
        <Fragment>
            <img 
                src={props.urlImagen} 
                alt=""
                className="mr-3"
            />
        </Fragment>
    )
}

export default Avatar
