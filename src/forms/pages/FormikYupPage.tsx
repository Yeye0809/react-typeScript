
import { useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';




export const FormikYupPage = () => {

    

    const { handleSubmit,  errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(12, 'must be 12 characteres or less')
                            .required('required'),
            
            lastName: Yup.string()
                            .max(12, 'must be 12 characteres or less')
                            .required('required'),
            
            email: Yup.string()
                        .email('invalid email address')
                        .required('required')
        })
    });

  return (
    <div>

        <h1>Formik Yup Page</h1>

        <form onSubmit={ handleSubmit } noValidate autoComplete='off'>

            <label htmlFor="firstName">First Name</label>
            <input  type="text" {...getFieldProps('firstName')}/>

            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')}/>
                
             { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email</label>
            <input   type="email" {...getFieldProps('email')}/>

            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}


