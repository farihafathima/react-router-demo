import React from 'react'
import { useAuth } from './auth'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export const RequireAuth = ({children}) => {
 const auth=useAuth()
 const location=useLocation()

 if(!auth.user){
    return <Navigate to='/login'  state={{path:location.pathname}} replace/>
 }
    return (
        <div>
            {children}
        </div>
    )
}
