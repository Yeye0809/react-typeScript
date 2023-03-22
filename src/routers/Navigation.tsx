import {BrowserRouter} from 'react-router-dom';
import {NavLink, Routes, Route, Navigate} from 'react-router-dom';
// import { FormikBasicPage } from '../forms/pages/FormikBasicPage';
// import { FormikYupPage } from '../forms/pages/FormikYupPage';
// import { FormikComponents } from '../forms/pages/FormikComponents';
// import { FormikAbstractation } from '../forms/pages/FormikAbstractation';
import { FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, Register, RegisterFormikPage, DynamicForm } from '../forms/pages';
import { Practice } from '../forms/pages/Practice';
// import { Register } from '../forms/pages/Register';

import logo from '../logo.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>      
            <nav>
                <img src={ logo } alt="logo react" />
                <ul>
                    <li>
                        <NavLink to='/register' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Register page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-basic' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-yup' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-components' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-abstrac' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik abstractation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-register' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-dynamic' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/practice' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Practice</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/register' element={ <Register /> }/>
                <Route path='/formik-basic' element={ <FormikBasicPage /> }/>
                <Route path='/formik-yup' element={ <FormikYupPage /> }/>
                <Route path='/formik-components' element={ <FormikComponents /> }/>
                <Route path='/formik-abstrac' element={ <FormikAbstractation /> }/>
                <Route path='/formik-register' element={ <RegisterFormikPage /> }/>
                <Route path='/formik-dynamic' element={ <DynamicForm /> }/>
                <Route path='/practice' element={ <Practice /> }/>

                <Route path='/*' element={ <Navigate to='/register' replace/>} />

            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Navigation
