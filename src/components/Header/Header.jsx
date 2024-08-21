import React from 'react'
import './header.css'
import {Container,Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/logo.png'
import btn_img from '../../assets/btn_img.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header_menu">
            <Link to="index">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/service">Service</Link>
            <Link>Contact</Link>

            
            
          </Nav>
          {/* header_btn starts */}
          <div className="header_btn">

          <a href="">Download</a>
          <div className="btn_img">
            <img src={btn_img} alt="" />
          </div>
          </div>
          {/* header_btn ends */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header