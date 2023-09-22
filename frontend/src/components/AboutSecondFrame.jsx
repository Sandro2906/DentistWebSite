import React from 'react'
import Team from '../assets/45743843-dentist-doctor-portrait-young-man-at-his-workplace-dental-clinic.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutSecondFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='w-full h-auto z-10'>
    <h1 data-aos="fade-up" className='text-center text-6xl font-extrabold py-14 '>Our Team</h1>
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div data-aos='fade-left' className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={Team} alt='pic' className='w-full h-full rounded-full object-cover border-8 p-2 shadowbox border-emerald-500  '/>
       <div className='flex justify-start items-start w-full h-auto py-3'>
       <h1 className='text-3xl font-bold'>Dr Richard Handal</h1>
       </div>
       <div className='flex justify-start items-start w-full h-auto '>
       <h1 className='text-xl '>General dentistry</h1>
       </div>
    </div>
    <div data-aos='fade-right' className='w-full h-auto px-10'>
        <h1 className=' font-bold text-3xl lg:text-5xl'>Welcome Dr Handal</h1>
        <h1 className='py-7 text-md text-gray-500'>Dr. Richard Handal is a South Florida native board and rised in Boca Raton. He attended not Nova Southeastern University where he graduated with the highest Academy the distinction. he then moved to New York City to attend Colombia University's College of dental medicine. At Colombian University Dr. Handal spent a considerable amount of time offering mentorship to underclassmen as a teaching assistant for Orthodontics and Oral Histology coursework. He also provided interview coaching and personal statement for proofreading for the pre-dental students. </h1>
        <h1 className='py-7 text-md text-gray-500'>After graduation, Dr. Handal further expanded his training by attending a general practice  residency in Gainesville FL at the highly competitive Malcolm Randall VA a medical center. The opportunity to work with disabled veterans was incredibly rewarding and fulfilling opportunity. This additional training expanded his competency in managing medically the diverse patients and executing complex surgical procedures.</h1>
        <h1 className='py-7 text-md text-gray-500'>in he's free time, Dr. Handal enjoys working with cars, tinkering with computers and electronics, and spending time with his family and friends.</h1>
    </div>
    
    </div>
    </div>
  )
}

export default AboutSecondFrame