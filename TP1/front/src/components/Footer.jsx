import React from 'react'
import '../css/footer.css'
import { AiFillFacebook, AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
        <a href="https://www.facebook.com/flor.leonardi1/" target='blank'>  <AiFillFacebook className='icono'/></a>
        <a href="https://www.instagram.com/florleonardi/" target='blank'> <AiFillInstagram className='icono' /></a>
        <a href="https://twitter.com/flor_leonardi"target='blank'> <AiFillTwitterSquare className='icono'/></a>
    </div>
  )
}

export default Footer