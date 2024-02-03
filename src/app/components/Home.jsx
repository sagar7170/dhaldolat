import React from 'react'
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

function Home() {
  return (
    <div id='home' className='bg-[#093779] h-screen  lg:flex  sm:space-x-10 justify-center items-center p-5'>
        <div className='flex flex-col sm:space-y-16 space-y-8 w-full justify-center'>
            <div className='backdrop-blur-sm bg-white/10 p-10 sm:p-16 space-y-5 text-center rounded-2xl'>
                <h1 className='uppercase sm:text-7xl text-5xl font-semibold '>Discover</h1>
                <h2 className='text-2xl'>Investment Opportunities</h2>
                <button  className='uppercase text-xl text-black bg-yellow-400 w-64 rounded-lg'>Click here</button>
            </div>
            <div className='backdrop-blur-sm bg-white/10 flex justify-between rounded-2xl sm:p-5 p-1'>
                 <div className='text-center rounded-2xl p-2'>
                    <ShowChartSharpIcon />
                    <h2>Growth</h2>
                 </div>
                 <div className=' text-center rounded-2xl p-2'>
                    <CurrencyRupeeSharpIcon />
                    <h2>INVESTMENT</h2>
                 </div>
                 <div className='text-center rounded-2xl p-2 uppercase'>
                    <HomeOutlinedIcon/>
                    <h2>Properties</h2>
                 </div>
                 <div className=' text-center rounded-2xl p-2'>
                    <HandshakeOutlinedIcon />
                    <h2>ASSISTANT</h2>
                 </div>
            </div>
        </div>
        <div className='mt-5'>
          <img className='rounded-2xl ' src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Home
