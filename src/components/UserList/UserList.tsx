import React, { useReducer, useState, useEffect } from "react";
import AddUser from "../AddUser/AddUser";
import User from "../User/User";
import { IUser,IUserList } from "../../models/user";
import Card from "../UI/Card";


const UserList: React.FC<IUserList> = ({users, deleteUserHandler}) => {

  return (
    <>
      <Card padding={"20px"} bgColor="#f4f4e9">
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
              opacity: .6,
            }}
          >
            <h2>ID:</h2>
            <h2>Full Name:</h2>
            <h2>SEC Points:</h2>
            <h2>Actions:</h2>
          </div>
        </>
      </Card>

      {users.length == 0 && (
        <Card  margin={"20px auto"} padding={"10px"} bgColor="#f4f4e9">
          <h2 style={{ margin: "0 auto", opacity: .6, color: "red" }}>Please Enter Examiner:</h2>
        </Card>
      )}

      <ul
        style={{
          overflowY: "scroll",
          height: "300px",
          padding: "0",
          maxWidth: "700px",
          margin: "10px auto",
          borderRadius: "3px",
        }}
      >
        {users.map((user: IUser) => (
          <User
            key={user.userID}
            fullName={user.fullName}
            Points={user.Points}
            userID={user.userID}
            deleteUser={deleteUserHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default UserList;
