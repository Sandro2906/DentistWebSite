import React from 'react'
import pic from '../assets/10-secrets-of-happy-families.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const FinancingThirdFrame = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div className='bg-gray-300'>
    <div className='w-full h-auto z-10'>
    <h1 data-aos="fade-left" className='text-center text-6xl font-extrabold pt-14 '>Care Credit</h1>
    <div className='py-14 w-full h-auto flex lg:flex-row flex-col px-7 lg:px-20 z-20'>

    <div data-aos="fade-right" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div data-aos='fade-left' className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl'>How Care Credits Work</h1>
        <h1 className='py-7 text-xl text-gray-500'>CareCredit helps you pay for out-of-pocket Dentistry or Healthcare expenses for you, your family, and even your pets! Once you are approved, you can use it again and again* to help manage health, wellness and beauty costs not covered by dental insurence.</h1>
        <button className='w-[150px] h-auto p-3 text-xl text-white bg-emerald-500 rounded'>Apply now</button>
        </div>
   
    </div>
    </div>
    </div>
  )
}

export default FinancingThirdFrame