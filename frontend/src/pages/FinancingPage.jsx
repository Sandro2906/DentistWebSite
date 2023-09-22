import React from 'react'
import FinancingFirstFrame from '../components/FinancingFirstFrame'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import FinancingSecondFrame from '../components/FinancingSecondFrame'
import FinancingThirdFrame from '../components/FinancingThirdFrame'

const FinancingPage = () => {
  return (
    <div>
    <NavBar />
        <FinancingFirstFrame />
        <FinancingSecondFrame />
        <FinancingThirdFrame />
    <Footer />
    </div>
  )
}

export default FinancingPage