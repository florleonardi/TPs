import React from 'react'
import { MDBInput, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import '../css/Contact.css'
import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const MainContact = () => {

    const [Id, setId]= useState(0)
    const [Name, setName]= useState("")
    const [Email, setEmail]= useState("")
    const [Cellphone, setCellphone]= useState(0)
    const [Message, setMessage]= useState("")
    const [Consultas, setConsultas] = useState([])


    const handleEnviarForm = (e) => {
        e.preventDefault()
        let nuevaConsulta = {
            Id: Id,
            Name:Name,
            Email:Email,
            Cellphone:Cellphone,
            Message: Message,

        }
        setConsultas( [...Consultas, nuevaConsulta] )
        console.log(Consultas)
    }


    const handleEliminar =(consulta)=>{
        const nuevoArray = Consultas.filter((consult)=> consult.Id !== consulta.Id)
        setConsultas(nuevoArray)
    }    

  return (
    <div >
        <div className='formulario'>
<form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>
      <MDBInput onChange={(e)=>{setId(e.target.value)}} label='Id' v-model='id' wrapperClass='mb-4' />

      <MDBInput onChange={(e)=>{setName(e.target.value)}} label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput  onChange= {(e)=>{setEmail(e.target.value)}} label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput onChange= {(e)=>{setCellphone(e.target.value)}} label='Cellphone' v-model='cellphone' wrapperClass='mb-4' />

      <MDBTextArea onChange= {(e)=>{setMessage(e.target.value)}}  wrapperClass='mb-4' label='Message' />

      
      <MDBBtn onClick={handleEnviarForm} color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
<div>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Cellphone</th>
          <th scope='col'>Message</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Consultas.map((consulta)=> (
             <tr key= {consulta.Id}>
             <th scope='row'>{consulta.Id}</th>
             <td>{consulta.Name}</td>
             <td>{consulta.Email}</td>
             <td>{consulta.Cellphone}</td>
             <td>{consulta.Message}</td>
             <td><button onClick={() => handleEliminar(consulta)}>Delete</button></td>
           </tr>
        ))}
        
      </MDBTableBody>
    </MDBTable>
    </div>
</div>
  )
}

export default MainContact