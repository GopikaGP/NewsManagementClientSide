import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import newslogo from '../assets/newslogo.png'


function Header() {
  return (
    <Navbar className="bg border border-secondary" style={{backgroundColor:'darkblue'}}>
    <Container>
      <Navbar.Brand>
      <img src={newslogo} alt='' width={'60px'} height={'60px'}/>
      {/* <span className='text-warning ms-3 fs-5'>News</span> */}
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header