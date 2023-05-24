import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [userData, setUserData] = useState([]);

  

   

  
  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://users-crud.academlo.tech/users/');
      setUserData(prevData => response.data);
    } catch (error) {
      console.error(error);
    }
  };
useEffect(()=>{

  
})
  fetchUserData();


  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://users-crud.academlo.tech/users/${userId}`);
      setUserData(prevData => prevData.filter(user => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (userId) => {
    alert("editar")
    console.log(`Editar usuario con ID: ${userId}`);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <ul className="userCardContainer">
        {userData.map((user) => (
          <li key={user.id} className="usercard">
            Nombre:<br /> {user.first_name} <br /><br />
            Apellido:<br /> {user.last_name} <br /><br />
            Correo:<br />{user.email} <br /><br />
            Fecha de nacimiento: <br />{user.birthday}<br /><br />
            Contraseña: <br />{user.password}
            <div className="buttonsContainer">
              <button onClick={() => handleEdit(user.id)}>Editar</button>
              
              <button onClick={() => handleDelete(user.id)}>Borrar</button>
              {console.log(user.id)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
