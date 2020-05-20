import React from 'react'

const UserTable = (props) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Pass</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ?
                props.users.map(users => (// users.pass solo sirve para demostracion en produccion se elimina
                    <tr key={users.id}>
                    <td>{users.name}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.pass}</td>
                    <td>
                      <button 
                        className="button muted-button"
                        onClick={
                            () => {props.editRow(users)}
                        }
                      >
                        Edit
                      </button>
                      <button 
                        className="button muted-button"
                        onClick={() => {props.deleteUser(users.id)}}
                      >
                          Delete
                      </button>
                    </td>
                  </tr>
                )) : (
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    );
}

export default UserTable