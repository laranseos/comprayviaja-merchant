import React from 'react'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Background from './Background'
const Layout = () => {
    return (
        <Background>
            <Navbar />
            <div className='mx-auto w-full overflow-auto'>
                <div className='flex'>
                    {/* <Sidebar /> */}
                    <div className='w-full '>
                        <div><Outlet /></div>
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default Layout
