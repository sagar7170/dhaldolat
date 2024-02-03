import React from 'react'

function Property() {
  return (
    <div id='property' className='p-5'>
      <div className='lg:w-[29rem]  backdrop-blur-sm bg-white/10 p-7 rounded-lg space-y-5'>
        <img className='rounded-lg' src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='flex justify-between space-y-2 items-center'>
            <div>
               <h3 className='text-yellow-300 font-semibold'>20 Lakhs</h3>
               <h3>min investment</h3>
            </div>
            <div>
                <h3 className='text-yellow-300 font-semibold'>100 sq.ft.</h3>
                <h3>min area</h3>
            </div>
        </div>
        <div className='flex justify-between space-y-2 items-center'>
            <div>
               <h3 className='text-yellow-300 font-semibold'>9%-12%</h3>
               <h3 className='uppercase'>rental yield</h3>
            </div>
            <div>
                <h3 className='text-yellow-300 font-semibold uppercase'>sector 121,noida</h3>
                <h3 className='uppercase'>location</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Property
