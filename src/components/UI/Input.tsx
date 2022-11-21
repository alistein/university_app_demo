import React, { CSSProperties, LegacyRef, useRef } from "react";
import { Iinput } from "../../models/user";



const input: CSSProperties = {
  height: "40px",
  width: "100%",
  boxSizing: "border-box",
  padding: "10px",
  border: "1px gray solid",
  outline: "none",
  borderRadius: "3px",
  fontSize: "calc(1rem)",
};

const Input: React.FC<Iinput> = ({
  type,
  className,
  name,
  placeholder,
  min,
  max,
  Iref,
  value,
  defaultValue,
  disabled
}) => {
  return (
    <>
    <input
      type={type}
      style={input}
      className={className}
      value={value}
      placeholder={placeholder}
      ref={Iref}
      name={name}
      min={min}
      max={max}
      defaultValue={defaultValue}
      disabled={disabled}
    />
    </>

  );
};

export default Input;
