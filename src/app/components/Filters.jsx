import React, { useState } from 'react'

function Filters() {
    
    return (
        <form className='flex flex-col backdrop-blur-sm bg-white/10 p-4 rounded-2xl text-black space-y-4'>
            <label className='uppercase text-yellow-300 font-semibold' for="sort">min investment</label>
            <select className='p-1 rounded-lg' name="" id="sort">
                <option value="">Low to high</option>
            </select>
            <label className='uppercase text-yellow-300 font-semibold' for="sort">Area</label>
            <select className='p-1 rounded-lg' name="" id="sort">
                <option value="">Low to high</option>
            </select>
           <div className='space-x-2 '>
            <span className='uppercase block text-yellow-300 font-semibold'>Location</span>
             <span className='p-1 bg-white rounded-lg'>Noida</span>
             <span className='p-1 bg-white rounded-lg'>Delhi</span>
             <span className='p-1 bg-white rounded-lg'>Delhi</span>
           </div>
        </form>
    )
}

export default Filters
