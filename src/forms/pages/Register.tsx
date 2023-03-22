
import '../styles/styles.css'
import { FormEvent, } from 'react';
import { useForms } from '../hooks/useForms';

export const Register = () => {

    const { 
        formData, onChange,resetForm, isValidEmail,
        email, name, password1, password2
    } = useForms({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log(formData);
    }

  return (
    <div>

        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder='name' 
            name='name'
            value={ name }
            onChange={ onChange }
            className= { `${name.trim().length <= 0 && 'has-error'}` }
            />
            { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input 
            type="email"
            placeholder='email' 
            name='email'
            value={ email }
            onChange={ onChange }
            />
           { !isValidEmail( email ) && <span>El email no es valido</span>}

        <input 
            type="password"
            placeholder='password' 
            name='password1'
            value={ password1 }
            onChange={ onChange }
            />
            { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe de ser mayor a 6 letras</span>}


        <input 
            type="password"
            placeholder='repet-password' 
            name='password2'
            value={ password2 }
            onChange={ (event) => onChange(event) }
            />
            { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}
            
            <button type='submit'>Create</button>
            <button type='button' onClick={ resetForm }>reset Form</button>

        </form>

      
    </div>
  )
}


