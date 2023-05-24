import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "components/UsersList";
import "./App.css";
import UsersForm from "components/UsersForm";

const App = () => {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);





  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://users-crud.academlo.tech/users/`);
        
        setData(response.data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando la lista de usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (


    <div className="appContainer">

      <UsersForm data={data} />
      <UsersList data={data}  />
    </div>
  );
};

export default App;
