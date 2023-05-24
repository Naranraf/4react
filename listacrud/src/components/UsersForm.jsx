import React, { useState } from 'react';
import axios from 'axios';

const UsersForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://users-crud.academlo.tech/users/', formData);
      console.log(response.data);
      // ... realizar acciones adicionales con la respuesta de la API si es necesario
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-form-container">
      <h2>Users Form</h2>
      <form>
        <div>
          <label htmlFor="first_name">First Name:</label> <br />
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label> <br />
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label> <br />
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
