import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    /* Actualiza datos al cargar componente */
    React.useEffect(() => {
        obtenerDatos()
    }, [])

    /* Consume toda la lista */
    const obtenerDatos = async () => {
        const data = await fetch('Uhttp://localhost:5000/users/readall')
        const users = await data.json()
        // Cargar arreglo de usuarios en json
    }

    return (
        <div>Datos</div>
    )
}

export default User