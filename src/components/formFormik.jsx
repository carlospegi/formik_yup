import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const FormTask = () => {

   

    const initialValues = {
        name: '',
        description: '',
      
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'name too short')
                .max(20, 'name too long')
                .required('name is required'),
      
           
            description: Yup.string()
                .min(8, 'description too short')
                .max(100, 'description too long')
                .required('description is required'),

        }
    )


    const submit = (values) => {
        alert('Add task')
    }

    return (
        <div>
            <h4>add task</h4>

            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2))

                }}
            >

           
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="your name" />
                        {  // email errors
                            errors.name && touched.name &&
                            (

                                <ErrorMessage name="name" component='div' />

                            )
                        }
                        <label htmlFor="description">description</label>
                        <Field id="description" type="textarea" name="description" placeholder="example@email.com" />


                        {  // email errors
                            errors.description && touched.description &&
                            (

                                <ErrorMessage name="description" component='div' />

                            )
                        }
                       
                        <button type="submit">Add Task</button>

                        {
                            isSubmitting ? (<p>Sending your credentials</p>) : null
                        }

                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default FormTask
