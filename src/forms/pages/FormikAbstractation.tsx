
import { Formik,Form } from 'formik';
import * as Yup from "yup";

// import { MyCheckbox } from '../components/MyCheckbox';
// import { MySelect } from '../components/MySelect';
// import { MyTextInput } from '../components/MyTextInput';

import {MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css';





export const FormikAbstractation = () => {

    
  return (
    <div>

        <h1>Formik Abstractation</h1>

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

                        <MyTextInput label='First Name'  name='firstName'/>

                        <MyTextInput label='Last Name'  name='lastName'/>

                        <MyTextInput label='Email'  name='email' type='email'/>

                        <MySelect label='Job Type' name='jobType'> 
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox name='terms' label='terms & conditions' />


                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
            

        </Formik>

    </div>
  )
}


