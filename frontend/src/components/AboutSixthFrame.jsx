import React from 'react'

import first from '../assets/yellow-in-chair.jpg'
import second from '../assets/Fellowship-stock-1024x836.jpg'
import third from '../assets/Img_1_trends_2023_8eeedd681c.jpg'

import tooth from '../assets/g9vqBC-lougheed-village-dentist-drjill-lee.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
    {
        id:1,
        name:'Individualized Dental Care',
        pic:first,
        text: 'Our mission si to provide you with personalized care. We are the team of dentist dedicated to improving and maintaining your oral health. Whether you need preventative care, cosmic dentistry, oral surgery, of a root canal and crown you will be in great hands. We work with most denatl insurance plans.',
        style: 'flex-row',
        fad:'fade-right'
    },
    {
        id:2,
        name:'Experienced Dental Proffesinals',
        pic:second,
        text: 'We offer board array of services. Ou team has proffesional experience to realize that there is no sutch a thing as one-size-fits-all treatment, so we never use one-size-fits-all approach to your dental plan.',
        style: 'flex-row-reverse',
        fad:'fade-left'
    },
    {
        id:3,
        name:'The Latest Treatments',
        pic:third,
        text: 'We provide quality and personalized oral health care using the lastest dental technology. By using lastest research and tools, we make ssure your time with us is as comfortable and as efficient as possible.',
        style: 'flex-row',
        fad:'fade-right'
    },
]

const AboutSixthFrame = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      })
  return (
    <div className='w-full h-auto py-14 px-7 md:px-20'>
    

    <div className='w-full h-auto py-6 flex justify-center items-center'>
        <h1 className='font-extrabold text-4xl'>Why CBar Dentistry?</h1>
    </div>

    <div className='w-full h-auto py-7 flex flex-col justify-between  '>
    {
        data.map(({id,pic,name,text, style,fad})=>(
            <div data-aos={fad} key={id} className={`flex flex-col lg:${style} w-full h-auto p-3`}>
            <div className='md:h-[400px] w-full h-auto'><img alt='pic' className='w-full h-full object-cover rounded-lg' src={pic} /></div>
            <div className='w-full h-auto p-7'>
            <div><h1 className='text-5xl font-bold py-6'>{name}</h1></div>
            <div><h1 className='text-xl'>{text}</h1></div>
            </div>
            </div>
        ))
    }
    <img className='absolute lg:flex hidden w-[100px] h-[100px] left-[46%] mt-[400px]' src={tooth} alt='Tooth'/>
    <img className='absolute lg:flex hidden w-[100px] h-[100px] left-[46%] mt-[800px]' src={tooth} alt='Tooth'/>
    </div>
    
    </div>
  )
}

export default AboutSixthFrame