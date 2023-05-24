const UsersList = ({ data }) => {

  console.log(data);

  return (
    <div  >

      <ul className="userCardContainer" >
        {data.map(user => (
          <li key={user.id}
            className="usercard">

            Nombre:<br /> {user.first_name} <br /><br />
            Apellido:<br /> {user.last_name} <br /><br />
            Correo:<br />{user.email} <br /><br />
            Fecha de nacimiento: <br />{user.birthday}<br /><br />
            Contraseña: <br />{user.password}
            <div className="buttonsContainer">

              <button>Editar</button>
              <button>Borrar</button>
            </div>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default UsersList;
