import React, { useReducer, useState, useEffect } from "react";
import AddUser from "../AddUser/AddUser";
import User from "../User/User";
import { IUser } from "../../models/user";
import { actionHandler, ActionKind } from "../../store/store";

import Card from "../UI/Card";

const key = "KEY_USERS";

const UserList: React.FC = () => {
  const [users, dispatch] = useReducer(actionHandler, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(key) as string);
    if (!savedUser) return;
    dispatch({ type: ActionKind.ADD_LOC, payload: savedUser });
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(users));
  }, [users]);

  const addUser = (userObject: IUser) => {
    console.log(users);
    if (!userObject) return;
    dispatch({ type: ActionKind.ADD, payload: userObject });
  };

  const deleteUserHandler = (userID: number): void => {
    const updatedUser = users.filter(
      (user: { userID: number }) => user.userID !== userID
    );
    dispatch({ type: ActionKind.DELETE, payload: updatedUser });
  };

  return (
    <>
      <Card bgColor="#f4f4e9">
        <AddUser addUser={addUser} />

        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{users.length} Examiner</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginRight: "20px",
            }}
          >
            <h2>ID:</h2>
            <h2>Full Name:</h2>
            <h2>SEC Points:</h2>
            <h2>Actions:</h2>
          </div>
        </>
      </Card>

      <Card bgColor="#f4f4e9">
        {users.length == 0 && (
          <h2 style={{ margin: "0 auto" }}>Please Enter Examiner:</h2>
        )}

        {users.map((user: IUser) => (
          <User
            key={user.userID}
            fullName={user.fullName}
            Points={user.Points}
            userID={user.userID}
            deleteUser={deleteUserHandler}
          />
        ))}
      </Card>
    </>
  );
};

export default UserList;
