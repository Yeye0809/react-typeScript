
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';


const initialValues:{ [x:string]: any } = {};
const requiredFields:{ [x:string]: any } = {};

for (const input of formJson) {

        initialValues[input.name] = input.value;

        if( !input.validations ) continue;

        let schema = Yup.string()

        for (const rule of input.validations) {

            if( rule.type === "required") {
                schema = schema.required('Este campo es requerido');
            }
            if( rule.type === "minLenght" ){
                schema = schema.min( (rule as any).value || 1, `minimo de ${(rule as any).value || 1} caracteres`);
            }
            if( rule.type === "email"){
                schema = schema.email('Email no valido');
            }
        }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
        
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={
                (values) => console.log(values)
            }
            validationSchema={validationSchema}
        >
            {
                (formok) => (
                    <div>
                        <Form noValidate autoComplete='off' >

                            {
                                formJson.map( ({type, name, label, placeholder, options}) => {

                                    if( type == "input" || type == "email" || type == "password" ) {

                                        return <MyTextInput 
                                                    key={name}
                                                    type={type as any} 
                                                    name={name} 
                                                    label={label} 
                                                    placeholder={placeholder}/>
                                    }else if( type == "select") {
                                        return (
                                            <MySelect 
                                                    key={ name }
                                                    name={name} 
                                                    label={label} >
                                                    <option value="">Select favorite Game</option>
                                                    {
                                                        options?.map( ({id, label }) => (
                                                            <option key={ id } value={ id }>{ label }</option>
                                                        ))
                                                    }
                                             </MySelect>
                                        )
                                    }

                                    return (
                                        <h1>Hay algun error</h1>
                                    )

                                })
                            }

                            <button type='submit'>submit</button>

                        </Form>
                    </div>

                )
            }

        </Formik>
    </div>
  )
}

