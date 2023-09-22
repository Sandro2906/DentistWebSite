import React from 'react'
import pic from '../assets/npr.brightspotcdn.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const CarrerFifthFrame = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  })
  return (
    <div className='bg-gray-300'>
    <div className='w-full h-auto z-10'>
    <div data-aos="fade-up" className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div  className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl pb-7'>Volunteer/Intern with us</h1>
        <h1 className=' font-bold text-2xl lg:text-3xl'>Volunteer</h1>
        <h1 className='py-7 text-xl text-gray-500'>Looking to complete your community hour requirements? Look no further, at C-Bar Dentistry we pride ourselves on helping todays people become better tomorrow people. We are open to all programs.</h1>
        <h1 className=' font-bold text-2xl lg:text-3xl'>Internship</h1>
        <h1 className='py-7 text-xl text-gray-500'>Have Credit hours master? We have the production to hlep you gain the hands of experience needed for the longevity of your career choice. Begin in dentistry is rewarding all in itself, being with C-Bar Dentistry to complete your courses is simply the icing to the cake.</h1>
        <button className='w-[150px] h-auto p-3 text-xl text-white bg-emerald-500 rounded'>Apply now</button>
        </div>
   
    </div>
    </div>
    </div>
  )
}

export default CarrerFifthFrame