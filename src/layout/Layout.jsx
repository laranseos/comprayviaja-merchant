import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div className=' flex-1 flex-col'>
            <Navbar />
            <div className='mx-auto w-full overflow-auto'>
                <div className='flex'>
                    <div className='w-full'>
                        <div><Outlet /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
