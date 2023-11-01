import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import UserList from './UserList';

const App = () => {
  const [ListOfUsers, setListOfUsers] = useState([])

  useEffect(() => {

    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setListOfUsers(res.data)
      })
  }, [])



  return (
    <div className="container">

      {ListOfUsers.length > 0 ?

        ListOfUsers.map((users) => (
          <UserList className="col-md-3" key={users.id} users={users} />
        ))
        : <h1>No movie found</h1>}

    </div>
  );
}

export default App;
