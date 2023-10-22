import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../styles/header.css';

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const activeStyle = {
    color: 'blue', // Set your desired color here
  };
  return (
    <div>
      <Navbar className='header-color' light expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          <img src={logo} alt="E-Pass" width="100" height="auto" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <div className='custom-button'>
              <NavItem>
                <NavLink
                  exact
                  tag={ReactLink}
                  to="/"
                  activeClassName="active-link"
                  style={window.location.pathname === '/' ? activeStyle : {}}
                >
                  Home
                </NavLink>
              </NavItem>
            </div>
            <div className='custom-button'>
              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/login"
                  activeClassName="active-link"
                  style={window.location.pathname === '/login' ? activeStyle : {}}
                >
                  Login
                </NavLink>
              </NavItem>
            </div>
            <div className='custom-button'>
              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/signup"
                  activeClassName="active-link"
                  style={window.location.pathname === '/signup' ? activeStyle : {}}
                >
                  Signup
                </NavLink>
              </NavItem>
            </div>
            <div className='custom-button'>
              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/about"
                  activeClassName="active-link"
                  style={window.location.pathname === '/about' ? activeStyle : {}}
                >
                  About
                </NavLink>
              </NavItem>
            </div>
            <div className='custom-button'>
              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/services"
                  activeClassName="active-link"
                  style={window.location.pathname === '/services' ? activeStyle : {}}
                >
                  Services
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
