import React from 'react'
import { useForm } from 'react-hook-form'

const EdituserForm = (props) => {

    /* Define valores por defecto */
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('lastName', props.currentUser.lastName);
    setValue('email', props.currentUser.email);

    /* Envia formulario */
    const onSubmit = (data, e) => {
        // Reutiliza ID (no la cambia)
        data.id = props.currentUser.id;

        // Actualiza datos de usuarios
        props.updateUser(props.currentUser.id, data)

        // Actualiza la informacion del formulario
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
        <button>Editar Usuario</button>
      </form>
     );
}
 
export default EdituserForm;
