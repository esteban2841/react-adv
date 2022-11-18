import React, { ChangeEventHandler } from 'react'

export interface InputProps{
    name: string;
    value: any;
    placeholder? : string;
    type:string;
    handlerFunction:ChangeEventHandler<HTMLInputElement>;
    validateFieldFunction?:(args:any)=>boolean;
    className?:string

}

export const CustomInput = ({ className,name, value, placeholder, type, handlerFunction, validateFieldFunction}:InputProps) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handlerFunction}
        className={`${className} ${value.trim().length <= 0 && "has-error"} ${validateFieldFunction && !validateFieldFunction(value) && "has-error"}`}
      />
      {value.trim().length <= 0 && <span>{`the field ${name} can not be blank`}</span>}
      {validateFieldFunction && !validateFieldFunction(value) && <span>{`the ${name} is not valid`}</span>}

            
    </>
  )
}
