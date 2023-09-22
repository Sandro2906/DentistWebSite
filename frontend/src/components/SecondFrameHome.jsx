import React from 'react'
import Doctor from '../assets/45743843-dentist-doctor-portrait-young-man-at-his-workplace-dental-clinic.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const SecondFrameHome = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 bg-gray-300'>
    <div data-aos="fade-left" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 flex justify-center items-center '>
        <img src={Doctor} alt='pic' className='w-full h-full object-cover border-emerald-500 border-8 p-2 rounded-[20px]'/>
    </div>
    <div data-aos="fade-left" className='w-full h-auto px-10'>
        <h1 className=' font-bold text-3xl lg:text-5xl'>Welcome Dr Handal</h1>
        <h1 className='py-7 lg:text-xl text-md text-gray-500'>Dentists in Florida often engage in community outreach and education programs to promote oral health. They participate in initiatives aimed at improving dental hygiene among children, adults, and underserved populations, ensuring that everyone has access to quality dental care.</h1>
        <h1 className=' pb-7 lg:text-xl text-md text-gray-500'>Florida dentists prioritize patient comfort and satisfaction. They create welcoming and friendly environments in their practices, making dental visits a stress-free experience. Many dentists offer flexible scheduling options to accommodate busy lives and emergencies.</h1>
        <button className=' rounded bg-blue-800 text-white w-[150px] h-auto p-3 text-xl flex justify-center items-center'>Learn more</button>
    </div>
    
    </div>
  )
}

export default SecondFrameHome