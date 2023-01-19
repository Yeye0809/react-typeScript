import {BrowserRouter} from 'react-router-dom';
import {NavLink, Routes, Route, Navigate} from 'react-router-dom';
import { LazyPage1,  LazyPage2,  LazyPage3 } from '../01-laziload/pages';

import logo from '../logo.svg';


const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>      
            <nav>
                <img src={ logo } alt="logo react" />
                <ul>
                    <li>
                        <NavLink to='/lazi1' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Lazipage1</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazi2' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Lazipage2</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazi3' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Lazipage3</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='lazi1' element={ <LazyPage1 /> }/>
                <Route path='lazi2' element={ <LazyPage2 /> }/>
                <Route path='lazi3' element={ <LazyPage3 /> }/>

                <Route path='/*' element={ <Navigate to='/home' replace/>} />

            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Navigation
