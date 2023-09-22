import React from 'react'

const ServicesThirdFrame = () => {
  return (
    <div className='w-full h-auto py-14 md:px-20 px-7 bg-gray-300'>
        <div className='flex justify-center items-center'><h1 className='text-4xl font-extrabold py-6'>Brighten a Day With Your Smile</h1></div>
        <div className='flex justify-center items-center'><h1 className='text-xl font-extrabold pb-14 text-gray-500'>Come and see us on our Lake Worth location</h1></div>
        <div className=' flex justify-center items-center pb-10'>

          <iframe className='w-[720px] h-[480px]' src="https://www.youtube.com/embed/mDvGyooqWds?si=iwChJJobkoPnGpFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
    </div>
  )
}

export default ServicesThirdFrame