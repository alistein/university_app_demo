import React, { CSSProperties, LegacyRef,useRef } from 'react'

interface Iinput {
    type:string,
    className?:"string",
    name?:string,
    placeholder?:string,
    Iref?: LegacyRef<HTMLInputElement> | undefined,
    min?:string,
    max?:string,

}

const input: CSSProperties = {
    height: "40px",
    width: "100%",
    boxSizing:"border-box",
    padding: "10px",
    border: "1px gray solid",
    outline: "none",
    borderRadius: "3px",
    fontSize: "calc(1rem)",
}

const Input:React.FC<Iinput> = ({type,className,name,placeholder,min,max,Iref}) => {
  return (
    <input type={type} style={input} className={className} placeholder={placeholder} ref={Iref} name={name} min={min} max={max} />
  )
}

export default Input;