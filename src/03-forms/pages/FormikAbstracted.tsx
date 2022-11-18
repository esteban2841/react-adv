import React from 'react'
import "../styles/styles.css"
import {  Formik, Form } from "formik"
import * as Yup from "yup"

import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstracted = () => {

  return (
    <div>
        <h1>Formik Basic tutorial</h1>

        <Formik 

            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                terms: false,
                jobType:""
            }}
            onSubmit={(values, {setSubmitting})=>{
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string().max(15, "should have 15 characters or less").required("Required"),
                    lastName: Yup.string().max(15, "should have 15 characters or less").required("Required"),
                    email: Yup.string().email('Invalid email format').required("Required"),
                    terms: Yup.boolean().oneOf([true], "Should accept the terms and conditions"),
                    jobType: Yup.string().notOneOf(["it-jr"],"This options is not allowed").required()
                })
            }
        >
            {
                (formik) => (
                    <Form >

                        <MyTextInput label='First Name' name='firstName' placeholder='Esteban'/>

                        <MyTextInput label='Last Name' name='lastName' placeholder='Puentes'/>

                        <MyTextInput label='Email' name='email' placeholder='example@email.com'/>
                        

                        <MySelect name={"jobType"} label={"Job Type"}>
                            <option value={""}>Pick something</option>
                            <option value={"developer"}>Developer</option>
                            <option value={"designer"}>Designer</option>
                            <option value={"it-senior"}>It senior</option>
                            <option value={"it-jr"}>It junior</option>
                        </MySelect>

                        <MyCheckbox label={'Terms and conditions'} name={'terms'}/>
                       

                        <button type='submit'>Submit</button>
                    </Form>
                    
                )
            }

        </Formik>

    </div>
  )
}
