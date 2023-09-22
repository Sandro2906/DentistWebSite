import React from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import CarrerFirstFrame from '../components/CarrerFirstFrame'
import CarrerThirdFrame from '../components/CarrerThirdFrame'
import CarrerFifthFrame from '../components/CarrerFifthFrame'
import CarrerForthFrame from '../components/CarrerForthFrame'
import CarrerSecondFrame from '../components/CarrerSecondFrame'


const CarrersPage = () => {
  return (
    <div>
        <NavBar />
                <CarrerFirstFrame />
                <CarrerSecondFrame />
                <CarrerThirdFrame />
                <CarrerForthFrame />
                <CarrerFifthFrame />
        <Footer />
    </div>
  )
}

export default CarrersPage