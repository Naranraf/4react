
const UsersList = ({data}) => {
  
 

  return (


    <div>
      <h1>Usuarios</h1>
      <ul>
        {
          data.map(user=>{
            <h2>{user.email}</h2>
            
          })
        }
       
      </ul>
    </div>
  );
};

export default UsersList;
