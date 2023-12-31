import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import '../styles/header.css';

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  const activeStyle = {
    color: 'blue',
  };
  return (
    <div>
      <Navbar className='header-color' light expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          <img src={logo} alt="E-Pass" width="100" height="auto" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto " navbar>
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
                  to="/services"
                  activeClassName="active-link"
                  style={window.location.pathname === '/services' ? activeStyle : {}}
                >
                  Services
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
                  to="/contact"
                  activeClassName="active-link"
                  style={window.location.pathname === '/contact' ? activeStyle : {}}
                >
                  Contact
                </NavLink>
              </NavItem>
            </div>
            {isAuthenticated && <div className='custom-button'>
              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/dashboard"
                  activeClassName="active-link"
                  style={window.location.pathname === '/dashboard' ? activeStyle : {}}
                >
                  Dashboard
                </NavLink>
              </NavItem>
            </div>
            }
          </Nav>
          <div>
            
          </div>
          <div >
            {
              //check user is login or not
              isAuthenticated ? (
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </Button>
              ) : (
                <Button color="primary" onClick={() => loginWithRedirect()}>
                  Log In
                </Button>
              )
            }

          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
