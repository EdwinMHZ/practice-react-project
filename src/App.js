import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';


function App() {

  const [userList,setUserList] = useState([]);

  const addUserHandler = (name,age) => {
    setUserList((prevUsers) => {
      return [...prevUsers,
        {
          name:name,
          age:age,
          id:Math.random().toString()
        }
      ]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
