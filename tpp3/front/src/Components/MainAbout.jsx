import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
const MainAbout = () => {


  const [foto, setFoto] = useState(1)

  const handleCambiarImg =() => {
    
   

    foto === 5 ? setFoto(1) : setFoto(foto+1)
    

  }
  return (
    <div>
      <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
      <img className='imagenxd' style={{maxHeight: '350px', maxWidth:'350px'}} src={foto + '.jpg'} alt=""/>

        <p  style={{marginLeft:'100px', width:'400px', fontSize:'15px'}}>
          Hi! Mi nombre es Florencia Leonardi, estudiante de Programacion en la universidad tecnologica de Tucuman. <br /> <br />
          Uno de mis proyectos es: <br />
          -Punto de venta en C# + SQL Server<br />

          <br />
          


        </p>
    </div>
    <br />
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center', marginRight:'600px'}}>
        
        <Button onClick={handleCambiarImg} style={{marginRight:"10px", marginBottom:'10px'}} variant='dark'>Cambiar Foto</Button> 
         
         </div>


    </div>
  )
}

export default MainAbout