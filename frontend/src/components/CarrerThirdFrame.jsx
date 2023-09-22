import React from 'react'
import pic from '../assets/technology-1.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerThirdFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='bg-gray-300'>
    <div className='w-full h-auto z-10'>
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div data-aos='fade-right' className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div data-aos='fade-left' className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl pb-7'>Learn More about our Dentist</h1>
        <h1 className='py-7 text-xl text-gray-500'>If you are interested in this position and would like to be considered, please Fill out this online application or call out office. You may also stop by and visit with our staff doctors. We are looking forward to meeting you and Hope you'll consider joining a Team of Dedicated individuals, who comes to work everyday with a purpose and passion.</h1>
        <button className='w-[150px] h-auto p-3 text-xl text-white bg-emerald-500 rounded'>Apply now</button>
        </div>
   
    </div>
    </div>
    </div>
  )
}

export default CarrerThirdFrame