import React, { FC, LegacyRef, useRef,useContext } from "react";
import ReactDOM from "react-dom";
import { ctx } from "../../App";
import { IUserEdit } from "../../models/user";
import { ActionKind } from "../../store/store";
import Button from "./Button";
import Input from "./Input";
import styles from "./Modal.module.css";
import Toast from "./Toast";



interface IModal {
    onClick?: () => void;
    readonly placeHolderName?: string;
    placeHolderPoints?: string;
    userID:number;
    setIsOpenProp:(isOpen: boolean) => void;
}
interface IOverlay {
    onClick: () => void;
}

const modal = document.getElementById("modal");

const Backdrop: FC<IOverlay> = ({ onClick }) => {
    return (
        <>
            <div onClick={onClick} className={styles.overlay}></div>
        </>
    );
};

const ModalOverlay: FC<IModal> = ({ placeHolderName, placeHolderPoints,userID,setIsOpenProp }) => {
    const modalNameRef = useRef<HTMLInputElement>(null);
    const modalPointsRef = useRef<HTMLInputElement>(null);

    const{users,dispatch,setIsActive,setToastContent} = ctx();


    const updateUserHandler = ():void => {
      const index = users?.findIndex((user) => user.userID == userID);
      const editPayload:IUserEdit = {
        index:index!,
        modalPointsRef:modalPointsRef.current!.value,
      }
      if(!editPayload.modalPointsRef) return;
      dispatch({type: ActionKind.EDIT, payload: editPayload});
      setIsOpenProp(false);
      setIsActive(true);
      setToastContent(<Toast children={`${placeHolderName}'s Point Edited to ${modalPointsRef.current?.value}`} status="Info" />);
    }

    return (
        <>
            <div className={styles.modal}>
                <h1>Edit User</h1>
                <form action="" onChange={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="">Full Name</label>
                    <Input type="name" name="full_name" placeholder={placeHolderName} defaultValue={placeHolderName} Iref={modalNameRef} />
                </div>
                <div>
                    <label htmlFor="">Points</label>
                    <Input
                        type="number"
                        name="points"
                        placeholder={placeHolderPoints}
                        Iref={modalPointsRef}
                        min="0"
                        max="0"
                    />
                </div>
                </form>
                <Button bgcolor="#0554e6" color="white" onClick={updateUserHandler}>
                    Update
                </Button>
            </div>
        </>
    );
};

const Modal: FC<IModal> = ({ onClick, placeHolderName, placeHolderPoints,userID, setIsOpenProp }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClick!} />, modal as Element)}
            ,
            {ReactDOM.createPortal(
                <ModalOverlay
                    placeHolderName={placeHolderName}
                    placeHolderPoints={placeHolderPoints}
                    userID={userID}
                    setIsOpenProp={setIsOpenProp}
                />,
                modal as Element
            )}
        </>
    );
};

export default Modal;
