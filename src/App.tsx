import { useReducer, useEffect, useCallback } from "react";
import UserList from "./components/UserList/UserList";
import "./App.css";
import { IUser } from "./models/user";
import { ActionKind, actionHandler } from "./store/store";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/UI/Card";

const key = "KEY_USERS";

const App = () => {
  
  const [users, dispatch] = useReducer(actionHandler, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(key) as string);
    if (!savedUser) return;
    dispatch({ type: ActionKind.ADD_LOC, payload: savedUser });
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(users));
  }, [users]);

  const addUser = useCallback(
    (userObject: IUser) => {
      console.log(users);
      if (!userObject) return;
      dispatch({ type: ActionKind.ADD, payload: userObject });
    },
    [users]
  );

  const deleteUserHandler = useCallback(
    (userID: number): void => {
      const updatedUser = users.filter(
        (user: { userID: number }) => user.userID !== userID
      );
      dispatch({ type: ActionKind.DELETE, payload: updatedUser });
    },
    [users]
  );

  return (
    <>
      <Card  bgColor="#f4f4e9">
        <AddUser addUser={addUser} />
      </Card>

      <UserList users={users} deleteUserHandler={deleteUserHandler} />
    </>
  );
};

export default App;
