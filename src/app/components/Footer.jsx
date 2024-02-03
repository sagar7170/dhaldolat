import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
function Footer() {
    return (
        <footer className='h-screen flex flex-col justify-between bg-[#710591]'>
            <div className='h-40 bg-[#093779]'></div>
            <div className='p-5'>
                <div className='flex  justify-between items-center sm:text-xl font-thin sm:p-10'>
                    <h1>LOGO</h1>
                    <div className=''>
                        <div className='uppercase flex sm:space-x-5 items-center space-x-2'>
                            <EmailOutlinedIcon fontSize='large' />
                            <a href="" >Email</a>
                        </div>
                        <div className='flex sm:space-x-5 items-center space-x-2    '>
                            <LocalPhoneOutlinedIcon fontSize='large' />
                            <span>Contact no.</span>
                        </div>
                    </div>
                    <div>
                        <ul className=' uppercase p-5 cursor-pointer sm:space-y-10 '>
                            <a href="#home"><li className='hover:text-yellow-500'>Home</li></a>
                            <a href="#about"><li className='hover:text-yellow-500'>About Us</li></a>
                            <a href="#property"><li className='hover:text-yellow-500'>Properties</li></a>
                            <a href="#contact"><li className='hover:text-yellow-500'>Contact us</li></a>
                        </ul>
                    </div>
                    <div className='sm:flex flex-col hidden uppercase space-y-4'>
                        <span>direct contact us on</span>
                        <div className='flex items-center backdrop-blur-sm bg-white/10  p-3 rounded-lg space-x-3 text-xl'>
                            <MapsUgcOutlinedIcon fontSize='large' color='success' />
                            <span>whatsapp</span>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden uppercase space-y-4 text-center p-5'>
                    <span>direct contact us on</span>
                    <div className='flex items-center backdrop-blur-sm bg-white/10  p-3 rounded-lg space-x-3 text-xl justify-center '>
                        <MapsUgcOutlinedIcon color='success' fontSize='large' />
                        <span>whatsapp</span>
                    </div>
                </div>
                <hr />
                <div className='uppercase text-lg font-thin text-center sm:p-10 p-5'>
                    <span className='block'>&copy; all rights reserved | Powered by <span className='text-yellow-300'>property vista</span></span>
                    <span>disclaimer</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
