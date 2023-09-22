import React from 'react'
import pic from '../assets/shutterstock_1971734174-1024x666.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const FinancingSecondFrame = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div className='w-full h-auto z-10'>
    <h1 data-aos="fade-left" className='text-center text-6xl font-extrabold pt-14  '>Leading Club Patients Solutions</h1>
    <div className='py-14 w-full h-auto flex lg:flex-row-reverse flex-col px-7 lg:px-20 z-20'>

    <div data-aos="fade-right" className='w-full h-auto lg:h-[500px] pb-5 lg:pb-0 rounded-full flex flex-col justify-center items-center '>
        <img src={pic} alt='pic' className='w-full h-full object-cover  rounded-lg   '/>
    </div>
    <div data-aos="fade-left" className='w-full h-auto px-10 flex flex-col justify-center'>
        <h1 className=' font-bold text-3xl lg:text-4xl'>Flexible financing for dental implants</h1>
        <h1 className='py-7 text-xl text-gray-500'>Get the low monthly paymnet you need to say "yes" to your treatmenr with premier implant financing through Leading Club Patient Solutions. C-Bar Dentistry service the Lake Worth, Lantana and Greenacres area and are a provider who utilizes us for dental financing for those fees that are not covered by dental insurance. 561-318-8762</h1>
        <button className='w-[150px] h-auto p-3 text-xl text-white bg-emerald-500 rounded'>Apply now</button>
        </div>
   
    </div>
    </div>
  )
}

export default FinancingSecondFrame