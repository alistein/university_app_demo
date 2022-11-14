import React, { useReducer, useState, useEffect } from 'react';
import AddUser from '../AddUser/AddUser';
import User from '../User/User';
import { IUser } from '../../models/user';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('1'));
    if (!savedUser) return;
    setUsers(savedUser);
  }, []);

  const addUser = (userObject: IUser) => {
    console.log(users);
    setUsers((prevUser) => {
      return [...prevUser, userObject];
    });
    localStorage.setItem('1', JSON.stringify(userObject));
  };

  return (
    <>
      <AddUser addUser={addUser} />
      {users.map((user) => (
        <User
          key={user.userID}
          fullName={user.fullName}
          Points={user.Points}
          userID={user.userID}
        />
      ))}
    </>
  );
};

export default UserList;
