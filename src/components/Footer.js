import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bus from '../assets/images/bus1.avif';
const Footer = () => {
  return (
    
    <footer className="footer-color text-light py-4">
        
      <Container>
        <Row>
          <Col lg="4" md="6">
            <h4>About Us</h4>
            <p>
            The Online Bus Pass Generator application aims to streamline and modernize the process
 of issuing and managing bus passes for commuters.An Online Bus Pass Generator appli
cation serves as a convenient and efficient tool for users to apply for and manage their
 bus passes electronically.
            </p>
          </Col>
          <Col lg="4" md="6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>City, State ZIP</li>
              <li>Email: contact@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </Col>
          <Col lg="4" md="12">
            <h4>Developed by</h4>
                <ul>
                  <li>Mr.Jaiswal Vikas</li>
                  <li>Ms.Kale Sakshi</li>
                  <li>Ms.Takale Vaishnavi</li>
                  <li>Ms.Tambade Shubhangi</li>
                </ul>
            
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">
              &copy; 2023 E-Buss Pass System. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
