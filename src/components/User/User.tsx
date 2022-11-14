import React, { useReducer, useState } from 'react';
import { IUser } from '../../models/user';
import styles from './User.module.css';

const User: React.FC<IUser> = ({ fullName, userID, Points }) => {
  const [user, setUser] = useState<IUser>();

  return (
    <>
      <div className={styles.card}>
        <div>
          Full Name: <h1>{fullName}</h1>
        </div>
        <div>
          User ID: <h1>{userID}</h1>
        </div>
        <div>
          Collected Points: <h1>{Points}</h1>
        </div>
      </div>
    </>
  );
};

export default User;
