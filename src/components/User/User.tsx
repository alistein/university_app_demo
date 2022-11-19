import React, { useReducer, useState } from "react";
import { IUser } from "../../models/user";
import styles from "./User.module.css";
import Button from "../UI/Button";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Modal from "../UI/Modal";

const User: React.FC<IUser> = ({ fullName, userID, Points, deleteUser }) => {
  const deleteItemHandler = () => {
    deleteUser?.(userID as number);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal
          placeHolderName={fullName}
          placeHolderPoints={Points!.toString()}
          userID={userID!}
          setIsOpenProp={setIsOpen}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <li tabIndex={1} style={{ listStyle: "none" }} className={styles.card}>
        <div>
          <p>{userID}</p>
        </div>
        <div>
          <p>{fullName}</p>
        </div>
        <div>
          <p>{Points}/700</p>
        </div>
        <div className={styles.action}>
          <Button onClick={deleteItemHandler} bgcolor="red" color="white" width="100px">
            Delete <AiFillDelete />
          </Button>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            bgcolor="#0554e6"
            color="white"
            width="120px"
          >
            Edit Points<FiEdit />
          </Button>
        </div>
      </li>
    </>
  );
};

export default User;
