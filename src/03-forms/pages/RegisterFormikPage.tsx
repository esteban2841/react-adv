import React, { FormEvent } from 'react'
import "../styles/styles.css"
import { useForm } from '../hooks/useForm';
import { CustomInput } from '../components/CustomInput';

import * as Yup from "yup"
import { useState } from 'react';

const formSchema = Yup.object({
    name: Yup.string().min(2,"The field name should have more than 2 characters").max(15, "The field should have less than 15 characters").required(),
    email: Yup.string().email("Email is invalid").required(),
    password1: Yup.string().min(6, "Password length should be higher than 6 characters").required(),
    password2: Yup.string().oneOf([Yup.ref("password1")], "The passwords don't match").required()

})

export const RegisterFormikPage = () => {

    const [ errors, setErrors ] = useState([])

    const { 
            formData,
            handleOnChange,
            // nickname,
            name,
            email,
            password1,
            password2,
            resetForm,
            isValidEmail,
        } = useForm({
        nickname:"",
        name : "",
        email : "",
        password1 : "",
        password2 : ""
    })

    
    const handleSubmit = async (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        const hasFormErrors = await validateFormSchema(formData)

        if( !hasFormErrors ){
            setErrors([])
            console.log( formData )
        }else{
            setErrors(hasFormErrors)
        }
    }   


    const validateFormSchema = async (obj:any) =>{

        const validationResult = await formSchema
        .validate(obj, {abortEarly:false})
        .catch((err)=>{
            return err
        })
        
        return validationResult.errors
    }

  return (
    <div>
        <h1>Register formik page</h1>

        <form onSubmit={handleSubmit} noValidate>

            {/* <CustomInput
                type={"text"}
                name={"nickname"}
                value={nickname}
                handlerFunction={handleOnChange}
                placeholder={"Nickname"}
            /> */}
            <CustomInput
                type={"text"}
                name={"name"}
                value={name}
                handlerFunction={handleOnChange}
                placeholder={"Name"}
            />
            <CustomInput
                type={"email"}
                name={"email"}
                value={email}
                handlerFunction={handleOnChange}
                placeholder={"Email"}
                validateFieldFunction={()=>isValidEmail(email)}
            />
            <CustomInput
                type="password" 
                placeholder='Password'
                name={"password1"}
                value={password1}
                handlerFunction={handleOnChange}
            />
            <CustomInput
                type="password" 
                placeholder='Confirm password'
                value={password2}
                name={"password2"}
                handlerFunction={handleOnChange}
            />
            { errors && 
                <div className='errors-container'>
                    {
                        errors.map((error,index)=>{
                            return <span key={index}>{error}</span>
                        })
                        
                    }
                </div>
            }
            <button onClick={resetForm}>Reset</button>
            <button type='submit' className='submit-button'>Create</button>
        </form>
    </div>
  )
}
