"use client"
import React, { useState } from 'react'
import Property from '../components/Property'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import Filters from '../components/Filters';
import Link from 'next/link';
function Properties() {
    const [showfilter,setShowfilter] = useState(false);
     const array = new Array(9).fill(9);
  return (
    <div className=''>
        <div className='flex justify-between p-5 text-xl relative '>
            <div className='flex items-center'>
                <ArrowLeftOutlinedIcon className='text-yellow-300' fontSize='large'/>
            <span className='uppercase text-yellow-300'>properties</span>
            </div>
            <span onClick={()=>setShowfilter(!showfilter)} className='uppercase underline cursor-pointer'>filters</span>
        </div>
       <div className={!showfilter?'hidden':'w-64 absolute right-5 z-10 top-32'}>
        <Filters/>
       </div>
        <div className='flex flex-wrap'>
        {
            array?.map((e,i)=>(
                
                <Property key={i}/>
                
            ))
        }
    </div>
    </div>
  )
}

export default Properties
