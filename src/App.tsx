import { useReducer, useEffect, useCallback, createContext,useContext, ReactNode, useState} from "react";
import UserList from "./components/UserList/UserList";
import "./App.css";
import { IUser } from "./models/user";
import { ActionKind, actionHandler } from "./store/store";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/UI/Card";
import Toast from "./components/UI/Toast";

const key = "KEY_USERS";

export type  GlobalContext = {
  users?: IUser[],
  dispatch?: any,
  setIsActive?:  (value: boolean) => void,
  setToastContent?:  (value: ReactNode) => void,
}
 
export const ModalLayer = createContext<GlobalContext>({users: [{fullName: "", Points: 0}],dispatch: () => {}});
export const ctx = () => useContext(ModalLayer);

const App = () => {

  const [users, dispatch] = useReducer(actionHandler, []);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [toastContent, setToastContent] = useState<ReactNode>();


  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(key) as string);
    if (!savedUser) return;
    dispatch({ type: ActionKind.ADD_LOC, payload: savedUser });
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);
 
    return () => clearTimeout(timer);
  }, [users]);

 

  const addUser = useCallback(
    (userObject: IUser) => {
      if (!userObject) return;
      dispatch({ type: ActionKind.ADD, payload: userObject });
      setToastContent(<Toast children={`Succesfully Added`} users={users} status="Success"/>);
      setIsActive(true);
    },
    [users]
  );
  

  const deleteUserHandler = useCallback(
    (userID: number): void => {
      const updatedUser = users.filter(
        (user: { userID: number }) => user.userID !== userID
      );
      dispatch({ type: ActionKind.DELETE, payload: updatedUser });
      setToastContent(<Toast children={`Succesfuly Removed`} users={users} status="Danger"/>)
      setIsActive(true);
    },
    [users]
  );

  

  return (
    <>
    <ModalLayer.Provider value={{users,dispatch,setIsActive,setToastContent}}>
      <Card bgColor="#f4f4e9">
        <AddUser addUser={addUser} />
      </Card>
        <UserList users={users} deleteUserHandler={deleteUserHandler} />
      </ModalLayer.Provider>
      {isActive && toastContent}
    </>
  );
};

export default App;