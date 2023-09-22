import React from 'react'
import second from '../assets/tooth-cleaning.jpg'
import first from '../assets/dental-work-cover.jpg'
import third from '../assets/kid-at-dentist-header-768x384.webp'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
    {
        id:1,
        name:'Cosmetic Dentistry',
        pic:first,
        text: 'Weather your teeth are the wrong shape, croocked, stained or chipped, our cosmetic dentist can treat your teeth with minimal method using the last techiques and the finest materials.',
        style: 'flex-row',
        fad:'fade-right'
    },
    {
        id:2,
        name:'Preventive Care',
        pic:second,
        text: 'Effecient preventative care is key to having a heaalthy smile. Consistent checkups with your dental insurence will allow our team to diagnose oral cancer, gum disease, adn tooth decay beofe they spread adn become a problem.',
        style: 'flex-row-reverse',
        fad:'fade-left'
    },
    {
        id:3,
        name:'Specialist Dentistry',
        pic:third,
        text: 'We have board certified Oral Seurgeo, Orthodontist, adn Endodontist to provide a one stop care. no referrals to adn outside dentist office. We make sure to take our tools and processes to alleviate any fear! If you\'re in the Greenacres, Lantana, Lake Worth, and surrounding areas, we are the one to call. Root canal and Crown are done same day!',
        style: 'flex-row',
        fad:'fade-right'
    },
]
const ServicesSecondFrame = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      })
  return (
    <div className='w-full h-auto py-14 px-7 relative z-50 md:px-20'>

    <div className='w-full h-auto py-7 flex flex-col justify-between  '>
    {
        data.map(({id,pic,name,text,style,fad})=>(
            <div data-aos={fad} key={id} className={`flex flex-col lg:${style} w-full h-auto p-3`}>
            <div className='w-full h-auto'><img alt='pic' className='w-full h-full object-cover rounded-lg' src={pic} /></div>
            <div className='w-full h-auto p-7'>
            <div><h1 className='text-5xl font-bold py-6'>{name}</h1></div>
            <div><h1 className='text-xl'>{text}</h1></div>
            </div>
            </div>
        ))
    }
    </div>

    </div>
  )
}

export default ServicesSecondFrame