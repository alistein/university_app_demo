import React, { CSSProperties, ReactNode } from "react";
import { IconType } from "react-icons/lib/cjs/iconBase";
import { IButton } from "../../models/user";
import styles from "./Button.module.css";



const Button: React.FC<IButton> = ({ children, bgcolor, color, onClick, width }) => {
  return (
    <>
        <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: `${bgcolor}`, color: `${color}`, width: `${width || "100%"}` }}
    >
      {children}
    </button>

    </>

  );
};

export default Button;
