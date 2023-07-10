import React from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/FormLocation.css'

const FormLocation = ({ setIdLocation }) => {

    const handleSubmit = (e) => {
     e.preventDefault()
     const inputValue = e.target.inputId.value.trim()
     if(inputValue === '' || inputValue === '0') {
        setIdLocation(getRandomNumber(126))
     } else {
        setIdLocation(e.target.inputId.value.trim())
        
     }
     
     e.target.inputId.value = ''
    }

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input className = 'input' id='inputId' type="text" />
        <button className='btn'>Search</button>
    </form>
    </>
  )
}

export default FormLocation