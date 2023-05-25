import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Main.css'

const Main = (props) => {
  const Nombre= props.alumno.Nombre
  const Apellido= props.alumno.Apellido
  const Edad= props.alumno.Edad
  const Legajo= props.alumno.Legajo
  const Foto= props.alumno.Foto
  const Numerodetelefono= props.alumno.Numerodetelefono
  const correo= props.alumno.correo
  const handleClick= () => {
    
  }
  return (
             
     <Card className='card1' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Foto}
      className='imagen'
      />
      <Card.Body >
        <h3 onClick={handleClick} >FLOR</h3>

        
        <Card.Title className='titulo'>{Nombre} {Apellido}</Card.Title>
        <Card.Text className='texto' >
        
         Mi nombre es {Nombre} {Apellido}, soy estudiante de programación de segundo año. Tengo {Edad}, mi número de legajo es {Legajo}, mi número de telefóno es {Numerodetelefono} y mi correo {correo}
        </Card.Text>
        <Button variant="primary">CONTACTO</Button>
      </Card.Body>
    </Card>

  )
}

export default Main