import React, { useState, useEffect } from "react";
import { Button, CardBody, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";
import register from '../assets/images/homepage_image.jpg'
import Background from "../assets/images/back.jpg";
import "../styles/homepage.css";
import Card from 'react-bootstrap/Card';

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
    <section className="container">
        <section className="card1">
         
          <h2 className="card__name">Daily Pass</h2>
          <div className="card__parr">
            <p>"A daily pass provides individuals with convenient and flexible access to services, attractions, or facilities for a single day, offering a cost-effective and hassle-free option for those seeking short-term enjoyment and convenience."
            </p>
          </div>
          {/* <div className="card__linkcont">
            <a href='/' className="link__card color__link__orange">Learn More</a>
          </div> */}
        </section>

        <section className="card2">
          
          <h2 className="card__name">Weekly Pass</h2>
          <div className="card__parr">
            <p>A weekly bus pass provides commuters with the convenience of unlimited bus rides throughout the week, offering a cost-effective and efficient transportation solution for regular travelers.
            </p>
          </div>
          {/* <div className="card__linkcont">
            <a href='/' className="link__card color__link__green">Learn More</a>
          </div> */}
        </section>
        
        <section className="card3">
          
          <h2 className="card__name">Monthly Pass</h2>
          <div className="card__parr">
            <p>"A monthly bus pass provides commuters with cost-effective and convenient unlimited access to public transportation services for an entire month, ensuring a seamless and economical commuting experience."
            </p>
          </div>
          {/* <div className="card__linkcont">
            <a href='/' className="link__card color__link__dark">Learn More</a>
          </div> */}
        </section>
        

      </section>
      

    </Base>
    
  );
};

export default Home;