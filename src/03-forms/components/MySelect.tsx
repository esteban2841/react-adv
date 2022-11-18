import React from 'react'
import { useField, ErrorMessage } from 'formik';

    interface TextInputProps {
        label:string;
        name:string;
        placeholder?:string;
        [x:string]:any
    }

export const MySelect = ({label, ...props}:TextInputProps) => {

   const [field] = useField(props)


  return (
    <>
        <label htmlFor={ props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        <ErrorMessage name={props.name} component={"span"} className={"custom-span-class"}/>
        {/* {
            meta.touched && meta.error && (
                <span className={"error"} >{meta.error}</span>
            )
        } */}
    </>
  )
}
