import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {generate} from 'generate-password';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EdituserForm from './components/EditUserForm';

function App() {

  /* HARDCODE Datos de Usuarios*/
  const usersData = [
    { id: uuidv4(), name: 'Tania', lastName: 'floppydiskette', email: 'f@utal.cl', pass: generate({length: 10, numbers: true})},
    { id: uuidv4(), name: 'Craig', lastName: 'siliconeidolon', email: 'g@utal.cl', pass: generate({length: 10, numbers: true})},
    { id: uuidv4(), name: 'Ben', lastName: 'benisphere', email: 'h@utal.cl', pass: generate({length: 10, numbers: true})},
  ]

  /* Arreglo de Usuarios */
  const [users, setUsers] = useState(usersData);

  /* Permite agregar usuarios asignando ID aleatoria y copiando la lista actual en: setUsers */
  const addUser = (user) =>{
    // Genera ID aleatoria
    user.id = uuidv4();

    // Enviar Datos al Back
    setUsers([
      ...users,
      user
    ])
  }

  /* Permite eliminar un usuario aplicando un filtro sobre el arreglo */
  const deleteUser = (id) => {
    // Enviar peticion al Back
    setUsers(users.filter(user => user.id !== id))
  }

  /* Flag de edicion de usuarios */
  const [editing, setEditing] = useState(false);

  /* Objeto vacio para Usuario Actual */
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: '', email: ''
  });

  /* Permite abrir formulario y definir estructura para edicion */
  const editRow = (user) => {
    // Activa componente de Editar Usuario
    setEditing(true);
    
    // Guarda los datos del usuario seleccionado
    setCurrentUser({
      id: user.id, name: user.name, lastName: user.lastName, email: user.email
    })
  }

  /* Actualiza informacion de usuario y regresa a vista "principal" */
  const updateUser = (id, updateUser) => {
    // Desactiva el componente de Editar usuario
    setEditing(false);

    // Actualiza los datos en el arreglo segun id
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
    <h1>CRUD Usuarios</h1>
    <div className="flex-row">
      <div className="flex-large">
        {
          editing ? (
            <div>
              <h2>Editar Usuario</h2>
              <EdituserForm
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Agregar Usuario</h2>
              <AddUserForm 
                addUser={addUser}/>
            </div>
          )
        }
      </div>
      <div className="flex-large">
        <h2>Lista de Usuarios</h2>
        <UserTable 
          users={users} 
          deleteUser={deleteUser}
          editRow={editRow}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
