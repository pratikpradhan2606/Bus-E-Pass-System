import React from 'react';
import { UpdatesData } from '../../Data/Data';
import './Updates.css';
import { Button } from 'reactstrap';

const Updates = () => {
  return (
    <>
            
    <div className="marquee-container">
    <center><h2>News Feed</h2>
    </center>
      <marquee direction="up" scrollamount="5"  className="marquee">
        {UpdatesData.map((update, index) => (
          <div key={index} className="marquee-item" style={{color:"red"}}>
            {update.heading}
          </div>
        ))}
      </marquee>
    </div>
    </>
  );
};

export default Updates;
