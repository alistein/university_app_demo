import React, { useReducer, useState } from 'react';
import { IUser } from '../../models/user';
import styles from './User.module.css';
import Button from '../UI/Button';
import {AiFillDelete} from  'react-icons/ai'
import {FiEdit} from  'react-icons/fi'
const User: React.FC<IUser> = ({ fullName, userID, Points }) => {

  return (
    <>
      <div className={styles.card}>
      <div>
           <p>{userID}</p>
        </div>
        <div>
          <p>{fullName}</p>
        </div>
        <div>
           <p >{Points}/700</p>
        </div>
        <div className={styles.action}>
          <Button bgcolor='red' color='white'>Delete <AiFillDelete/></Button>
          <Button bgcolor='#0554e6' color='white'>Edit <FiEdit/></Button>
          
        </div>
      </div>
    </>
  );
};

export default User;
