import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";
import register from '../assets/images/homepage_image.jpg'
import Background from "../assets/images/background.jpg";
import "./Home.css";




const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const colors = ["blue", "purple", "green"];
  const colorIndex = colors.indexOf(backgroundColor);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(colors[(colorIndex + 1) % colors.length]);
    }, 2000); // Change color every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [colorIndex, backgroundColor]);

  return (
    <Base>
      <Container>
      <div style={{ Background: `url(${Background})` }}>
    
        
        <Row className="mt-3">
          <Col md="7">
            <Row>
            <Card className="card1">
              <CardBody className="p-4"
              style={{ color: "white" }}>
                <h1>Travel Easily with E-Pass</h1>
                <p>
                "Streamlined Travel, Instant E-pass: Where Convenience Meets Security."<br></br>
                In a world that constantly evolves, so do our transportation systems. Introducing our cutting-edge E-Pass Bus System – a revolutionary digital solution designed to enhance your commuting experience.<br></br>


                </p>
              </CardBody>
            </Card>

            <Card className="card2">
              <CardBody className="p-4"
              style={{ color: "white" }}>
                <h1>Vision</h1>
                <p>
                To transform the landscape of public transportation by providing a state-of-the-art E-Pass system that brings efficiency, accessibility, and security to the daily commute. We are dedicated to enhancing the overall commuter experience, promoting sustainable transportation practices, and contributing to the development of smart cities.<br>
</br>
Key Pillars of our Vision:<br>
</br>
Efficiency and Convenience<br></br>
Enhanced Security and Data Privacy<br></br>
Digital Innovation



                </p>
              </CardBody>
            </Card>


            <Card className="card3">
              <CardBody className="p-4"
              style={{ color: "white" }}>
                <h1>Mission</h1>
                <p>
                To transform the landscape of public transportation by providing a state-of-the-art E-Pass system that brings efficiency, accessibility, and security to the daily commute. We are dedicated to enhancing the overall commuter experience, promoting sustainable transportation practices, and contributing to the development of smart cities.
                </p>
              </CardBody>
            </Card>
    
            </Row>
           
           
          </Col>
         
        </Row>
        </div>
        
      </Container>
      
    </Base>
    
  );
};

export default Home;