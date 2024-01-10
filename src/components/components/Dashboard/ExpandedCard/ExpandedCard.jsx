import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import { Button, TextField } from '@mui/material';
import { Label } from 'reactstrap';
import { UserContext } from '../App/DashboardApp';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
function ExpandedCard({ param, setExpanded }) {
  const {profileData, setProfileData} = useContext(UserContext);
  const [passType, setPassType] = useState();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [amount, setAmount] = useState(0);
  
  const handleGetPass = async (event) => {
    event.preventDefault();
        try{
            const data = {
                "type": passType,
                "activatedOn": selectedDate,
                "validity": "2023-01-31",
                "status": "active",
                "renewalDate": "2023-02-01",
                "passId": "BP12345"
            }
            console.log(JSON.stringify(data));
            const response = await axios.post('http://localhost:8081/api/users/pass/'+profileData.aadharNo,data);
            const userData = response.data;
            alert("Pass Generated")
        }catch(error){
            console.log("Could No Generate your pass");
        }
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        <UilTimes onClick={setExpanded} />
      </div>
      x
      
      {/* Pass type input */}
      <TextField
        label="Pass Type"
        value={param.title}
        onChange={(e) => setPassType(e.target.value)}
      />
      {/* Source input */}
      <TextField
        label="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      {/* Destination input */}
      <TextField
        label="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      {/* Amount input */}
      <TextField
        label="Pass Amount"
        value={param.charges}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* Date input */}
      <Label>Select Date</Label>
      <TextField
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <Button onClick={handleGetPass}>Get Pass</Button>
      <span>Last 24 Hours</span>
      <ToastContainer/>
    </motion.div>
  );
}

export default ExpandedCard;
