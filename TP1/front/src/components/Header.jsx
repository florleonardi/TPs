import React from 'react'
import fotoflor from '../assets/fotoflor.jpg'
import '../css/header.css'
const Header = () => {
  return (
    <div>
        <h1><u>Maria Florencia Leonardi Fusilieri</u></h1>
        <img className='fotoflor' src={fotoflor} alt="" />
    </div>
  )
}

export default Header