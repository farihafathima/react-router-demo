import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
    const navStyleHeading=({isActive})=>{

        return{
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline'
        }

    }
    const auth=useAuth()
    return (
        <nav className='primary'>
            <NavLink to="/" style={navStyleHeading}>
                    Home
            </NavLink>
            <NavLink to='/about' style={navStyleHeading}>About</NavLink>
            <NavLink to='/products' style={navStyleHeading}>Products</NavLink>
            <NavLink to='/users' style={navStyleHeading}>Users</NavLink>
            <NavLink to='/profile' style={navStyleHeading}>Profile</NavLink>{
                !auth.user&& <NavLink to='/login' style={navStyleHeading}>Login</NavLink>
}
        </nav>
    )
}


//Nav Link Knows wheather or not it is the active link.We can Use it to style active Link 
//Special about navLink is by fefault it receives avtive class when the link is current route
//NavLink is a component will set a property called isActive which can be destructured from the function parameter.
//NavLink componenet is specifically meant for building components like nav bar,BreadCrums or set of tabs where you would like
//To highLightthe current selected item and provide usefull context with screenreaders.
//If you want to navigate to routes from other parts of the app.
//Link should be the component to use as you would'nt want the active class applied when it is not needed.
//