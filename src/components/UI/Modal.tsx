import React, { FC } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Input from "./Input";
import styles from "./Modal.module.css";

interface IModal { onClick?: () => void }
interface IOverlay { onClick: () => void }

const modal = document.getElementById("modal");

const Backdrop: FC<IOverlay> = ({ onClick }) => {
    return (
        <>
            <div onClick={onClick} className={styles.overlay}>

            </div>
        </>
    );
}

const ModalOverlay: FC<IModal> = () => {
    return (
        <>
            <div className={styles.modal}>
                <h1>Edit User</h1>
                <div>
                    <label htmlFor="">Full Name</label>
                    <Input type="name" name="full_name" placeholder="Nito Ibragim..." />
                </div>
                <div>
                    <label htmlFor="">Points</label>
                    <Input
                        type="number"
                        name="points"
                        placeholder="0-700"
                        min="0"
                        max="0"
                    />
                </div>
                <Button bgcolor="#0554e6" color="white">Update</Button>
            </div>
        </>
    );
};



const Modal: FC<IModal> = ({ onClick }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClick!} />, modal as Element)},
            {ReactDOM.createPortal(<ModalOverlay />, modal as Element)}
        </>
    )
}

export default Modal

