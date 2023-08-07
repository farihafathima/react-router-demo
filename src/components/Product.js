import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
    return (
        <>
        <div>
            <input type='search' placeholder='search products'/>

        </div>
        <nav>
            <Link to='featured'>Featue</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet/>
        </>
    )
}
