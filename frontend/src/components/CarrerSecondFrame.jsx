import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerSecondFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='w-full h-auto py-14 px-7 md:px-20'>
    <h1 data-aos="fade-up" className='md:text-4xl text-2xl font-bold text-center pb-14'>Join Our Group Of Family</h1>
      <div className='w-full h-auto flex items-center flex-col'>
      <h1 data-aos='fade-left' className='text-xl font-bold pb-7 md:w-[700px] w-full text-start'>Oral Surgeon and Endodontics</h1>
      <h1 data-aos='fade-left' className='text-gray-500 md:w-[700px] pb-7'>We are seeking a motivated, quality oriented Oral Surgeon And Endodotics to join our team in our office. We offer great salary, wand work independently with a supportive trained staff around you. We have a team approach to dentistry. We insist on patient and familly centered dentistry an overall superior dental experience. Our focus is being able to efficiently connect together specialists and general dentists. C Bar - Dentistry practice continually strives for excellence in patient satisfaction, personal quality care and the growth and development of its employees. You will also have a dental professional supporting you to confer adn collaborate with as you continue to grow in your carrer.</h1>
      <h1 data-aos='fade-left' className='text-gray-500 md:w-[700px]  pb-7'>We want specialist who:</h1>
      
      <ul data-aos='fade-left' className='text-gray-500 pb-7 md:w-[700px] w-full'>
          <li>Can provide oral surgery duties</li>
          <li>Must have Doctorate of Dental Surhery (DDS)</li>
          <li>Has a passion for dentstry and enjoys working in a team enviroment</li>
          <li>Fouces on quality dental care & exceptional customer service skills</li>
          <li>Provides comfort dental care to help our patients feel at ease shile in the dental chair</li>
          <li>Connect and build trust with our general practitioners</li>
          <li>Flexibility to work at other office locations if necessary</li>
      </ul>

      <div data-aos='fade-left' className='text-gray-500 pb-7 md:w-[700px] w-full'>
      <h1>Job Type:</h1>
      <h1>Part Time (Contract) 1-2 Days Per Month</h1>
      </div>

      <div data-aos='fade-left' className='text-gray-500 pb-7 md:w-[700px] w-full'>
      <h1>Education:</h1>
      <h1>Doctorate (Required)</h1>
      </div>
      </div>
    
    </div>
  )
}

export default CarrerSecondFrame