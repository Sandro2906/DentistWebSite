import React from 'react'
import pic from '../assets/Facebook_GeneralDentistry.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerForthFrame = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div className='w-full h-auto z-10'>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 z-20'>

    <div data-aos="fade-left" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div data-aos="fade-right" className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl'>General Dentist</h1>
        <h1 className='py-7 text-xl text-gray-500'>Excellent Part-Time Opportunity for General Dentist. Potential full-time. Modern, digital pricate practice in great location. This Private practice values patient relationships and quality dental care.</h1>
        <h1 className='py-7 text-xl text-gray-500'>Wee seek that dentist who is upbeat, presenting and delivering quality dental care. Must have active FL License.</h1>
        <button className='w-[150px] h-auto p-3 text-xl text-white bg-emerald-500 rounded'>Apply now</button>
        </div>
   
    </div>
    </div>
  )
}

export default CarrerForthFrame