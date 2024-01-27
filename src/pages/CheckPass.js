// CheckPass.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import TextField from '@mui/material/TextField';
import Base from '../components/Base';

const CheckPass = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null); // User data to display in modal
  
  // Function to handle checking the pass
  const checkPass = async () => {
    let userHasPass = false; 
    try {
        const response = await axios.get('http://localhost:8081/api/users/passes/current/' + aadharNumber);
        const currentDatePasses = response.data;
        if (currentDatePasses === '') {
          alert("You don't have an active Pass");
          return;
        }
        
        userHasPass = true; 

      } catch (error) {
        console.error('Error fetching current date passes:', error);
      }
   
    if (userHasPass) {
      // Set user data for the modal
      setUserData({
        // name: 'S',
        aadharNo: aadharNumber,
      });

      // Show the modal
      setShowModal(true);
    } else {
      // Handle the case where the user does not have an active pass
      alert('User does not have an active pass.');
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Base>
    <div className="container mt-5">
      <h2>Check Pass</h2>
      <div className="mb-3">
        <TextField
          label="Enter Aadhar Number"
          variant="outlined"
          fullWidth
         value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
        />
      </div>
      <Button color="primary" onClick={checkPass}>
        Check Pass
      </Button>

      <Modal isOpen={showModal} toggle={closeModal} className="custom-modal">
  <br />
  <ModalHeader style={{ marginTop: "10%" }} toggle={closeModal}>
    User Details
  </ModalHeader>
  <ModalBody>
    <p>Aadhar Number: {userData?.aadharNo}</p>
    <p>You have an Active Pass</p>
    {/* Add more user details as needed */}
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" onClick={closeModal}>
      Close
    </Button>
  </ModalFooter>
</Modal>
      </div>
      </Base>
  );
};

export default CheckPass;
