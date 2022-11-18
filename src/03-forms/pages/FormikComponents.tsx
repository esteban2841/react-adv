import React from 'react'
import "../styles/styles.css"
import {  Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"


export const FormikComponents = () => {

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
                        <label htmlFor='firstName'>First Name</label>
                        <Field name={"firstName"} type="text"/>
                        <ErrorMessage name="firstName" component={"span"}/>
                        

                        <label htmlFor='lastName'>Last Name</label>
                        <Field name={"lastName"} type="text"/>
                        <ErrorMessage name="lastName" component={"span"}/>
                        
                        <label htmlFor='email'>Email</label>
                        <Field name={"email"} type="text"/>
                        <ErrorMessage name="email" component={"span"}/>

                        <label htmlFor='jobType'>Job Type</label>
                        <Field name={"jobType"} as="select">
                            <option value={""}>Pick something</option>
                            <option value={"developer"}>Developer</option>
                            <option value={"designer"}>Designer</option>
                            <option value={"it-senior"}>It senior</option>
                            <option value={"it-jr"}>It junior</option>
                        </Field>


                        <label>
                            <Field name={"terms"} type="checkbox"/>
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component={"span"}/>

                        <button type='submit'>Submit</button>
                    </Form>
                    
                )
            }

        </Formik>

    </div>
  )
}
