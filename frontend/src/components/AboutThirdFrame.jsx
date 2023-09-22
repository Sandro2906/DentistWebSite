import React from 'react'
import Team from '../assets/istockphoto-1331285308-1024x1024.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutThirdFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='bg-gray-300'>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 '>

    <div data-aos='fade-left' className='w-full h-auto lg:h-[500px] rounded-full pb-5 lg:pb-0 flex  flex-col justify-center items-center '>
        <img src={Team} alt='pic' className='w-full h-full rounded-full object-cover border-8 p-2 shadowbox border-emerald-500'/>
       <div className='flex justify-start items-start w-full h-auto py-3'>
       <h1 className='text-3xl font-bold'>Dr. Lisser Arneas DMD</h1>
       </div>
       <div className='flex justify-start items-start w-full h-auto '>
       <h1 className='text-xl '>General dentistry, invisaling provider.</h1>
       </div>
    </div>
    <div data-aos='fade-right' className='w-full h-auto px-10'>
        
        <h1 className='py-7 text-md text-gray-500'>Dr. Lee Arenas, a dedicated and highly-skilled general dentist has joined C-Bar dentistry. A 2017 graduate of the University of Florida College of dentistry Dr. Arenas looks forward to providing her patients with unparalleled dental care. Born and raised in Peru, she moved to south Florida in 2000.  She worked as a dental assistant while obtaining her bachelor of biology at Nova South Eastern University, so received invaluable hands on training while studying. With the support and love of her family and friends she became the first doctor in her family to receive her doctor of dental medicine degree from the University of Florida where she was also heavily involved in volunteerism and community service.</h1>
        <h1 className='py-7 text-md text-gray-500'>Dr. Arneans professional organizations and affiliations include the American dental Association the Florida dental association and the Academy of general dentistry. she has also proudly received Awards honors and the instructions from the XI American chapter of American Kappa Upsilon Honorary Dental Society, the International Congress of Oral Implantologist Pre-Doctoral Student Achivment Awward, the American Association of Oral and Maxilliofacial Surgeons Dental Implant Student Award and the Academy of Dentistry International Student Servant Leadership Award.</h1>
        </div>
    
    </div>
    </div>
  )
}

export default AboutThirdFrame