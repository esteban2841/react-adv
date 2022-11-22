import React from 'react'
import data from "./../data/custom-form.json"
import { Formik, Form } from "formik"
import { MyTextInput,MySelect, MyCheckbox } from '../components'
import * as Yup from 'yup';

const initialValues: { [key:string] : any } = {}
const requiredFields: { [key:string] : any } = {}

for (const input of data){
    initialValues[input.name] = input.value

    if(!input.validations) continue
    
    let schema = Yup.string()
    
    for ( const rule of input.validations){
        if(rule.type === "required"){
            schema = schema.required("This field is required")
        }
        if(rule.type === "minLength"){
            schema = schema.min((rule as any).value || 2, `This field should have minimum of ${(rule as any).value||2}`)
        }
        if(rule.type === "email"){
            schema = schema.email(`Please enter a valid email address`)
        }
    }
    
    requiredFields[input.name] = schema
}

console.log("🚀 ~ file: DynamicForm.tsx ~ line 9 ~ requiredFields", requiredFields)
const validationSchema = Yup.object({ ...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic form</h1>

        <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={validationSchema}
        >
            {(formik)=>(
                <Form noValidate>
                    {
                        data.map(({type, name, placeholder, label, options}) =>{

                            if(type === "input" || type === "text" || type === "email"){

                                return <MyTextInput 
                                        key={name}
                                        type={(type as any)} 
                                        name={name} 
                                        label={label}
                                        placeholder={placeholder}
                                        />

                            }else if(type === "select"){

                                return <MySelect 
                                            key={name}
                                            type={(type as any)} 
                                            name={name} 
                                            label={label}
                                            placeholder={placeholder}>
                                            <option value="">Select an option</option>
                                            {
                                                options?.map(opt=>(
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))
                                            }
                                        </MySelect>
                            }
                            return <MyCheckbox 
                                    key={name}
                                    type={(type as any)} 
                                    name={name} 
                                    label={label}
                                    placeholder={placeholder}/>
                        })
                    }
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>

    </div>
  )
}
