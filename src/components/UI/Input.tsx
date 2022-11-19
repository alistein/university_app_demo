import React, { CSSProperties, LegacyRef, useRef } from "react";

interface Iinput {
  type: string;
  className?: "string";
  name?: string;
  placeholder?: string;
  value?: string;
  Iref?: LegacyRef<HTMLInputElement> | undefined;
  min?: string;
  max?: string;
  defaultValue?: string,
}

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
    />
    </>

  );
};

export default Input;
