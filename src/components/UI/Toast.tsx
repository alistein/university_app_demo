import React, { useEffect, useState } from "react";
import { IToast } from "../../models/user";
import styles from "./Toast.module.css";

const Toast: React.FC<IToast> = ({ children, status, users }) => {
    const [counter, setCounter] = useState<number>(3);

    useEffect(() => {
        setCounter(3);
        const idInterval = setInterval(
            () => setCounter((counter) => counter - 1),
            1000
        );
        setTimeout(() => {
            clearInterval(idInterval);
        }, 3000);
        return () => clearInterval(idInterval);
    }, [users]);

    let color;

    switch (status) {
        case "Success":
            color = "#47D764";
            break;
        case "Danger":
            color = "#ff355b";
            break;
        case "Info":
            color = "#2F86EB";
            break;
        case "Warning":
            color = "#FFC021";
            break;
        default:
            break;
    }
    return (
        <>
            <div className={styles.toast} style={{ backgroundColor: `${color}` }}>
                {children}
                {` / Toast will disappear in ${counter} seconds: `}
            </div>
        </>
    );
};

export default Toast;
