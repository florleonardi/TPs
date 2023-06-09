import React from 'react'
//import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import {
    MDBFooter,
    MDBContainer,
   // MDBCol,
    //MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='https://www.facebook.com/flor.leonardi1' 
          role='button'
          target='blank'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='https://twitter.com/flor_leonardi'
          role='button'
          target='blank'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

    
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='https://www.instagram.com/florleonardi/'
          role='button'
          target='blank'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='https://www.linkedin.com/in/florencia-leonardi-19529120b/?originalSubdomain=ar'
          role='button'
          target='blank'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/florleonardi#!'
          role='button'
          target='blank'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright:
      <a className='text-white' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer