import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    /* Tratamiento de Formulario */
    const {register, errors, handleSubmit} = useForm();

    /* Agrega Usuario Nuevo */
    const onSubmit = (data, e) => {
        // Agrega datos del usuario
        props.addUser(data)

        // Actualiza informacion en formulario
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombres</label>
        <input type="text" name="name" ref={
            register({
                required: {value: true, message: 'Campo Requerido'}
            })
        }/>
        <div>
            {errors?.name?.message}
        </div>
        <label>Apellidos</label>
        <input type="text" name="lastName" ref={
            register({
                required: {value: true, message: 'Campo Requerido'}
            })
        }/>
        <div>
            {errors?.name?.message}
        </div>
        <label>Correo Electrónico</label>
        <input type="text" name="email" ref={
            register({
                required: {value: true, message: 'Campo Requerido'}
            })
        }/>
        <div>
            {errors?.email?.message}
        </div>
        <label>Repita Correo Electrónico</label>
        <input type="text" name="email2" ref={
            register({
                required: {value: true, message: 'Campo Requerido'}
            })
        }/>
        <div>
            {errors?.email?.message}
        </div>
        <button>Agregar Nuevo Usuario</button>
      </form>
     );
}
 
export default AddUserForm;
