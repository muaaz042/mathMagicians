import React from 'react'
import Calculator from './Calculator'

const CalculatorPage = () => {
  return (
    <div className='calculatorPage'>
        <h1>Let's do some maths!</h1>
        <div className='cal-div'>
        <Calculator/>
        </div>
    </div>
  )
}

export default CalculatorPage