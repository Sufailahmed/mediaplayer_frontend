import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" >
          <Link to='/' style={{textDecoration:"none",color:"white",fontSize:"25px"}}>
          <i class="fa-solid fa-video text-warning me-2"></i>Media Player
          </Link> 
          </Navbar.Brand>
          <div className='ms-5'>
            <Link to='/' style={{ textDecoration: "none", color: "white", }}><i class="fa-solid fa-plane-arrival text-warning"></i> Landing Page</Link>
            <Link to='/home' style={{ textDecoration: "none", color: "white",marginLeft:"15px"}}><i class="fa-solid fa-house text-warning"></i> Home Page</Link>
            <Link to='/watch' style={{ textDecoration: "none", color: "white",marginLeft:"15px" }}><i class="fa-solid fa-clock-rotate-left text-warning"></i> Watch History</Link>

          </div>
        <Navbar.Toggle />
       
        
      </Container>
    </Navbar>
    </>
  )
}

export default Header