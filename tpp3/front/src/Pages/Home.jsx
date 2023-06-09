import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import fotoFlor from '../assets/flor.jpg'

const alumno= {id:1, Nombre:"Florencia", Apellido: "Leonardi", Edad:"25 años", Legajo: 55715, Foto:fotoFlor,Numerodetelefono: 3814455039, correo: "florchuleonardi123@gmail.com"  }

const Home = () => {
  return (
    <div>
        <Header/>
        <Main alumno={alumno}/>
        <Footer/>
    </div>
  )
}

export default Home