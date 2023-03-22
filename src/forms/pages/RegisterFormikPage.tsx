
// import { FormEvent, } from 'react';
// import { useForms } from '../hooks/useForms';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    const {handleSubmit, errors, touched, getFieldProps, handleReset } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password1: '',
            password2: '',
        },
        onSubmit: (values) => console.log(values),

        validationSchema: Yup.object({
            name: Yup.string()
                     .required('Required')
                     .min(2, 'min 2 characters')
                     .max(15, ' must be 15 characters or less '),
            email: Yup.string()
                      .required('Required')
                      .email('email address no validate'),
            password1: Yup.string()
                          .required('Required')
                          .min(6, 'password must be min 6 characters'),
            password2: Yup.string()
                          .required('Required')
                          .oneOf([Yup.ref('password1')], 'Password do not match')
        })
    })

    // const { 
    //     formData, onChange,resetForm, isValidEmail,
    //     email, name, password1, password2
    // } = useForms({
    //     name: '',
    //     email: '',
    //     password1: '',
    //     password2: '',
    // });

    // const onSubmit = (event:FormEvent<HTMLFormElement>) => {

    //     event.preventDefault();
    //     console.log(formData);
    // }

  return (
    <div>
        <h1>Register  Formik Page</h1>
        <form onSubmit={ handleSubmit }>

            <label htmlFor="">Name</label>
            <input type='text' {...getFieldProps('name')} />
            { touched.name && errors.name && <span>{errors.name}</span>}

            <label htmlFor="">Email</label>

           <input type='text' {...getFieldProps('email')}/>
           { touched.email && errors.email && <span>{ errors.email }</span>}

           <label>Password</label>

        <input type='password' {...getFieldProps('password1')} />
            { touched.password1 && errors.password1 && <span>{ errors.password1 } </span>}

        <label htmlFor="">Confirm Password</label>
        <input type='password' {...getFieldProps('password2')}/>
            { touched.password2 && errors.password2 && <span>{ errors.password2 }</span>}
            
            <button type='submit'>Create</button>
            <button type='button' onClick={ handleReset }>reset Form</button>

        </form>

      
    </div>
  )
}


