"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
function Header() {

    const [sidebar,setSidebar] = useState(false);

    return (
        <header className='bg-[#093779] flex justify-between relative'>
            <Link href='/'>
            <h1 className='p-5 hover:text-yellow-500 text-xl cursor-pointer'>LOGO</h1>
            </Link>
            <ul className=' uppercase sm:flex hidden space-x-5 p-5 cursor-pointer'>
                <a href="#home"><li className='hover:text-yellow-500'>Home</li></a>
                <a href="#about"><li className='hover:text-yellow-500'>About Us</li></a>
                <a href="#property"><li className='hover:text-yellow-500'>Properties</li></a>
                <a href="#contact"><li className='hover:text-yellow-500'>Contact us</li></a>
            </ul>
             <div className='p-5 sm:hidden' onClick={()=>setSidebar(!sidebar)}>
               <MenuIcon fontSize='large'/>
             </div>
            <div className={!sidebar?'hidden':'absolute xl:hidden right-0 flex z-10'}>   
                <CloseIcon onClick={()=>setSidebar(!sidebar)} fontSize='large' color='warning'/>
                <ul className='uppercase h-screen w-64 p-10 space-y-5 bg-[#6991cc]'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Properties</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
