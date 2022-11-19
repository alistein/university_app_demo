import React, { CSSProperties, useState } from 'react'
import styles from "./Toast.module.css"

type Status = "Success" | "Danger" | "Info" | "Warning";

interface IToast {
    children: string,
    status: Status,
    onClick?: () => void;
}


const Toast: React.FC<IToast> = ({ children, status, onClick }) => {
    let color;

    if (status == "Success") {
        color = "#47D764";
    } else if (status == "Danger") {
        color = "#ff355b"
    } else if (status == "Info") {
        color = "#2F86EB"
    } else if (status = "Warning") {
        color = "#FFC021"
    }

    return (
        <>
            <div className={styles.toast} style={{ backgroundColor: `${color}` }}>
                {children}
            </div>
        </>
    )
}

export default Toast;