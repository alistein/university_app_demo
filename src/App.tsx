import { useReducer } from 'react';
import UserList from './components/UserList/UserList';
import './App.css';
import { IUser } from './models/user';


const App = () => {
 
  return (
    <>
    <UserList/>  
    </>
  );
};

export default App;
