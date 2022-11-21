import React, { useCallback, useRef } from 'react';
import { IUser } from '../../models/user';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Input from '../UI/Input';
import {IProps} from '../../models/user'


const AddUser: React.FC<IProps> = ({ addUser }) => {
  const fullnameRef = useRef<HTMLInputElement>(null);
  const pointRef = useRef<HTMLInputElement>(null);

  let newUserObject:IUser;

  // Send user details to List in UserList.tsx 
  const addUserHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(Number(fullnameRef.current?.value)) return alert("Please enter full name");
        newUserObject = {
      fullName: fullnameRef.current!.value,
      Points: Number(pointRef.current!.value),
      userID: Math.floor(Math.random() * 1000),
    };
    if((!newUserObject.fullName || !newUserObject.Points))  return alert("Please Enter values!");
   
    addUser(newUserObject);
    fullnameRef.current!.value = "";
    pointRef.current!.value = "";

  },[])
   
  return (
    <>
    <img src="../../public/logo.png" width="200px" style={{margin: "0 auto"}} height="100px" alt="" />
      <form action="" onSubmit={addUserHandler}>
        <Card className={styles.form}>
        <div>
          <label htmlFor="">Full Name</label>
          <Input
            Iref={fullnameRef}
            type="text"
            name="full_name"
            placeholder="Nito Ibraqim..."
          />
        </div>
        <div>
          <label htmlFor="">Points</label>
          <Input
            Iref={pointRef}
            type="number"
            name="points"
            placeholder="0-700"
            min='0'
            max='700'
          />
        </div>
        <button>Submit</button>
        </Card>
      </form>
    </>
  );
};

export default AddUser;
