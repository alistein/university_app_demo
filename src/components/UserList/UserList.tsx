import React, { useReducer, useState, useEffect } from 'react';
import AddUser from '../AddUser/AddUser';
import User from '../User/User';
import { IUser } from '../../models/user';
import Card from '../UI/Card';

const key = "KEY_USERS";

const UserList: React.FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(key) as string);
    if (!savedUser) return;
    setUsers(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(users));
  }, [users])

  const addUser = (userObject: IUser) => {
    console.log(users);
    setUsers((prevUser) => {
      return [...prevUser, userObject];
    });

  };

  return (
    <>
      <Card>
        <AddUser addUser={addUser} />
    {users.length > 0 && 
        <>
          <div style={{ display: "flex", justifyContent: "center" }}><h1>{users.length} Examiner</h1></div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evently" }}>
            <h2>ID:</h2>
            <h2>Full Name:</h2>
            <h2>SEC Points:</h2>
            <h2>Actions</h2>
          </div>
        </>

    }

   {users.length == 0 && <h2 style={{margin: "0 auto"}}>Please Enter Examiner</h2>}


        {users.map((user) => (
          <User
            key={user.userID}
            fullName={user.fullName}
            Points={user.Points}
            userID={user.userID}
          />
        ))}
      </Card>
    </>
  );
};

export default UserList;
