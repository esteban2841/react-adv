import React from 'react'
import "../styles/styles.css"
import { FormikErrors, useFormik } from "formik"


interface FormValues{
    firstName : string;
    lastName : string;
    email : string
}

export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: FormValues) =>{
        const errors : FormikErrors<FormValues> = {}

        if(!firstName){
            errors.firstName = "Required"
        }else if (firstName.length > 15){
            errors.firstName = "Must be 15 characteres or less"
        }
        
        if(!lastName){
            errors.lastName = "Required"
        }else if (lastName.length > 10){
            errors.lastName = "Must be 10 characteres or less"
        }
        
        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors
    }

    const formik = useFormik({
        initialValues : {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit : values =>{
            console.log(values, "values to pass")
        },
        validate
    })

    const {values, handleChange, handleSubmit, errors, touched, handleBlur} = formik

  return (
    <div>
        <h1>Formik Basic tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
                type={"text"}
                name={"firstName"}
                onChange={ handleChange }
                value={values.firstName}
                onBlur={handleBlur}
            />
            
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            <label htmlFor='lastName'>Last Name</label>
            <input
                type={"text"}
                name={"lastName"}
                onChange={ handleChange }
                value={values.lastName}
                onBlur={handleBlur}
            />
            
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
            <label htmlFor='email'>Email</label>
            <input
                type={"text"}
                name={"email"}
                onChange={ handleChange }
                value={values.email}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
