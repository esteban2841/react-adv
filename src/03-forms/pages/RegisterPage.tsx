import React, { FormEvent } from 'react'
import "../styles/styles.css"
import { useForm } from '../hooks/useForm';
import { CustomInput } from '../components/CustomInput';

export const RegisterPage = () => {

    const { 
            formData,
            handleOnChange,
            nickname,
            name,
            email,
            password1,
            password2,
            resetForm,
            isValidEmail
        } = useForm({
        nickname:"",
        name : "",
        email : "",
        password1 : "",
        password2 : ""
    })
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        console.log( formData )
    }   


  return (
    <div>
        <h1>RegisterPage</h1>

        <form onSubmit={handleSubmit} noValidate>

            <CustomInput
                type={"text"}
                name={"nickname"}
                value={nickname}
                handlerFunction={handleOnChange}
                placeholder={"Nickname"}
            />
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

            <button onClick={resetForm}>Reset</button>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
