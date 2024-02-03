import React from 'react'

function Contact() {
    return (
        <form className='uppercase h-screen flex flex-col justify-center items-center  '>
            <div className='text-center backdrop-blur-sm bg-white/10 p-10  rounded-2xl space-y-5 '>
                <span className='sm:text-7xl text-3xl text-yellow-400 '>connect <span className='text-white'>with us</span></span>
                <h3 className='sm:text-4xl text-xl'>please fill this form!!</h3>
                <div className='space-y-5'>
                    <input className='w-full p-2 rounded-lg ' placeholder='Name' type="text" />
                    <div className='flex space-x-2'>
                        <input className='w-16  p-2  rounded-lg' type="number"  placeholder='+91'/>
                        <input className='flex flex-1 p-2 rounded-lg' type="number" placeholder='Contact Number'/>
                    </div>
                    <input className='w-full p-2 rounded-lg' type="text" placeholder='Any comments?'/>
                </div>
                <div className='flex justify-between underline '>
                    <div></div>
                    <button className='text-xl uppercase'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Contact
