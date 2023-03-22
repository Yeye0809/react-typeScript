
import { Formik, Field,Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';




export const FormikComponents = () => {

    
  return (
    <div>

        <h1>Formik Components</h1>

        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}

            onSubmit={ (values) => {
                console.log(values)
            }}

            validationSchema={ Yup.object({
                firstName: Yup.string()
                                .max(12, 'must be 12 characteres or less')
                                .required('required'),
                
                lastName: Yup.string()
                                .max(12, 'must be 12 characteres or less')
                                .required('required'),
                
                email: Yup.string()
                            .email('invalid email address')
                            .required('required'),
                
                terms: Yup.boolean()
                          .oneOf([ true ], 'You must accept terms and conditions'),

                jobType: Yup.string()
                            .required('required')
                            .notOneOf([ 'it-jr' ], 'this option is not allowed')
                
                  })
            }

        >
            {
                (formik) => (
                    <Form  autoComplete='off'>

                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName' type='text'/>
                        <ErrorMessage name='firstName' component='span'/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name='lastName' type='text'/>
                        <ErrorMessage name='lastName' component='span'/>


                        <label htmlFor="email">Email</label>
                        <Field name='email' type='text'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name='jobType' as='select'> 
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>

                        <label>
                            <Field name='terms' type='checkbox'/>
                            terms and conditions
                        </label> 
                        <ErrorMessage name='terms' component='span'/>

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
            

        </Formik>

    </div>
  )
}


