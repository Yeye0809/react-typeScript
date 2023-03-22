
import '../styles/styles.css'
import { useFormik, FormikErrors } from 'formik';


interface FormValues {
    firstName: string,
    lastName: string,
    email: string
}

export const Practice = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {

        const errors:FormikErrors<FormValues> = {};

        if( !firstName ) {
            errors.firstName = 'First name required';
        }else if ( firstName.length >= 12 ) {
            errors.firstName = 'must be 12 character or less'
        }

        if( !lastName ) {
            errors.lastName = 'last name required';
        }else if ( lastName.length >= 12 ) {
            errors.lastName = 'must be 12 character or less'
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
         }

        return errors

    }

    const {handleBlur, handleChange, handleSubmit, errors,touched, values} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    })

  return (
    <div>
      <form onSubmit={ handleSubmit } autoComplete= 'off'>
        <label htmlFor="firstName">First Name</label>
        <input 
            type="text"
            name='firstName'
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={values.firstName} 
        />
             { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="LastName">Last Name</label>
        <input 
            type="text" 
            name='lastName'
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={values.lastName} 
         />
             { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="Email">Email</label>
        <input 
            type="email" 
            name='email'
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={values.email} 
        />
             { touched.email && errors.email && <span>{ errors.email }</span> }

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

