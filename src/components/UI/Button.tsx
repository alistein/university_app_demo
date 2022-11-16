import React, { CSSProperties, ReactNode } from "react";
import { IconType } from "react-icons/lib/cjs/iconBase";
import styles from "./Button.module.css";

interface IButton {
  children: string | ReactNode;
  bgcolor: string;
  color: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, bgcolor, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}
    >
      {children}
    </button>
  );
};

export default Button;
