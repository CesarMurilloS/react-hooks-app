import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        
        // limpiar campos
        e.target.reset();
    }

    return (
        <Fragment>
            <h2>Hooks Forms</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-2"
                    name="usuario"
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
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.usuario && errors.usuario.message}
                </span>
                <button 
                type="submit" 
                className="btn btn-primary">
                    Enviar
                </button>
            </form>
            
        </Fragment>
    );
}
 
export default HookForm;