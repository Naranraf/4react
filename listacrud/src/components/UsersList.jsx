import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [userData, setUserData] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '',
    password: '',
  });
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://users-crud.academlo.tech/users/');
      setUserData(prevData => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://users-crud.academlo.tech/users/${userId}`);
      setUserData(prevData => prevData.filter(user => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (userId) => {
    try {
      const response = await axios.get(`https://users-crud.academlo.tech/users/${userId}`);
      const user = response.data;
      setEditUserId(userId);
      setEditFormData(user);
      setIsEditFormOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://users-crud.academlo.tech/users/${editUserId}`, editFormData);
      setEditUserId(null);
      setEditFormData({
        first_name: '',
        last_name: '',
        email: '',
        birthday: '',
        password: '',
      });
      setIsEditFormOpen(false);
      fetchUserData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <ul className="userCardContainer">
        {userData.map((user) => (
          <li key={user.id} className="usercard">
            {editUserId === user.id && isEditFormOpen ? (
              <div className="editFormContainer">
                <form onSubmit={handleUpdate} className="editForm">
                  <div>
                    <label htmlFor="first_name">First Name:</label> <br />
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={editFormData.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Last Name:</label> <br />
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={editFormData.last_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label> <br />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label> <br />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="birthday">Birthday:</label> <br />
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={editFormData.birthday}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">Actualizar</button>
                  <button onClick={() => setIsEditFormOpen(false)}>Cerrar</button>
                </form>
              </div>
            ) : (
              <>
                <div>
                  Nombre: {user.first_name}
                </div>
                <div>
                  Apellido: {user.last_name}
                </div>
                <div>
                  Correo: {user.email}
                </div>
                <div>
                  Fecha de nacimiento: {user.birthday}
                </div>
                <div>
                  Contraseña: {user.password}
                </div>
                <div className="buttonsContainer">
                  <button onClick={() => handleEdit(user.id)}>Editar</button>
                  <button onClick={() => handleDelete(user.id)}>Borrar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
