import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";

import register from '../assets/images/homepage_image.jpg'

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
        <div className="heading mt-3">
          <h3>E-Bus Pass</h3>
        </div>
        <Row className="mt-3">
          <Col md="7">
            <Row>
            <Card style={{ backgroundColor: backgroundColor }}>
              <CardBody className="p-4"
              style={{ color: "white" }}>
                <h1>Travel Easily with E-Pass</h1>
                <p>
                  Get assured safety environment & practices along safety
                  guidelines. choose from a wide selection and ensure safety
                </p>
              </CardBody>
            </Card>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <h5>Explore E-pass System</h5>
                    <p>E pass system is the web application system is going to develope to generate E passes
 digitally by adding necessary information and documents to generate pass.</p>
                    <button className="search">Search</button>
                </Col>
            </Row>
          </Col>
          <Col className="mt-5 col-lg-3 col-sm-1">
                    <img
                    src={register}
                    alt="Registration Image"  
                    style={{ width: '180%', height: 'auto' }}
                    />
        </Col>
        </Row>
       
      </Container>
    </Base>
  );
};

export default Home;
