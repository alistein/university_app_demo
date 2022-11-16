import React, { useRef } from 'react';
import { IUser } from '../../models/user';
import styles from './AddUser.module.css';
import Card from '../UI/Card';

interface IProps {
  addUser: (userObject: IUser) => void;
}

const AddUser: React.FC<IProps> = ({ addUser }) => {
  const fullnameRef = useRef<HTMLInputElement>(null);
  const pointRef = useRef<HTMLInputElement>(null);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUserObject: IUser = {
      fullName: fullnameRef.current!.value,
      Points: Number(pointRef.current!.value),
      userID: Math.floor(Math.random() * 1000),
    };
    if(newUserObject.fullName === "" || newUserObject.Points === null)  return alert("Please Enter values!");
    addUser(newUserObject);
  };

  return (
    <>
    <img src="../../public/logo.png" width="200px" style={{margin: "0 auto"}} height="100px" alt="" />
      <form action="" onSubmit={addUserHandler}>
        <Card className={styles.form}>
        <div>
          <label htmlFor="">Full Name</label>
          <input
            ref={fullnameRef}
            type="text"
            name="full_name"
            placeholder="Nito Ibraqim..."
          />
        </div>
        <div>
          <label htmlFor="">Points</label>
          <input
            ref={pointRef}
            type="number"
            name="points"
            placeholder="0-700"
            min="0"
            max="700"
          />
        </div>
        <button>Submit</button>
        </Card>
      </form>
    </>
  );
};

export default AddUser;
