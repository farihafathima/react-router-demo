import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParam,setSearchParam]=useSearchParams()
    const showActiveUsers=searchParam.get('filter')==='active'
    return (
        <div>
            {/* <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet/> */}
            <button onClick={()=>setSearchParam({filter:'active'})}>Active User</button>
            <button onClick={()=>setSearchParam({})}>Reset Filter</button>
            {
                showActiveUsers?<h2>Active Users</h2>:<h2>Reset Filter</h2>
            }
        </div>
    )
}
