import React, { useRef } from 'react';
import { User } from '../../models/user';

interface IProps {
  addUser: (userObject: User) => void;
}

const AddUser: React.FC<IProps> = ({ addUser }) => {
  const fullnameRef = useRef<HTMLInputElement>(null);
  const pointRef = useRef<HTMLInputElement>(null);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUserObject: User = {
      fullName: fullnameRef.current!.value,
      Points: Number(pointRef.current!.value),
      userID: Math.floor(Math.random() * 1000),
    };
    addUser(newUserObject);
  };

  return (
    <>
      <form action="" onSubmit={addUserHandler}>
        <div>
          <label htmlFor="">Full Name</label>
          <input
            ref={fullnameRef}
            type="text"
            name="full_name"
            placeholder="John Smith..."
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
      </form>
    </>
  );
};

export default AddUser;
