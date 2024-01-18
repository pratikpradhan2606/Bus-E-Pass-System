// Profile.js
import React, { useState, useContext } from 'react';
import { useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext} from '../App/DashboardApp.jsx';

const Profile = () => {
    
  const {profileData,setProfileData} = useContext(UserContext);


  const handleChange = (event, property) => {
    //dynamically changing value
    setProfileData({ ...profileData, [property]: event.target.value })
  }
  const submitForm = async (event) => {
    event.preventDefault()
 
    
    try {
     
        // Send user profile data to your backend for registration
        console.log(profileData);
        const response = await axios.put('http://localhost:8081/api/users/'+profileData.aadharNo, profileData);
        if(response.data){
            console.log('User data sent to backend:', response.data);
            toast.success("Profile Updated Successfully!", {
              position: toast.POSITION.TOP_CENTER,
          });
        }
     
    } catch (error) {
      console.error('Error sending user data to backend:', error);

    }
    //call server api for sending data
  }
  return (
    <div>

      <Form onSubmit={submitForm}>
        <div className="text-center">
          Edit Profile
        </div>
        <Row>
          <Col md={6}>

            <FormGroup >
              <Label for="aadhar" >Your aadhar</Label>
              <Input
                type="aadhar"
                placeholder='Enter aadhar'
                id="aadhar"
                onChange={(e) => handleChange(e, 'aadhar')}
                value={profileData.aadharNo}
                readOnly={profileData.aadharNo ? true : false}
                
              />
              <span 
              style=
              {{
                color:'red',
                font:'small-caption',
                fontWeight:'bold'
              }}
              >Non Editable</span>
            </FormGroup>
            <FormGroup>
              <Label for="name" >Enter Name</Label>
              <Input
                type="text"
                placeholder='Enter Name'
                id="name"
                onChange={(e) => handleChange(e, 'name')}
                value={profileData.name}
              />
            </FormGroup>
            
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email" >Enter Email</Label>
              <Input
                type="email"
                placeholder='Enter Email'
                id="email"
                onChange={(e) => handleChange(e, 'email')}
                value={profileData.email}
                readOnly={profileData.email ? true : false}
              />
              <span 
              style=
              {{
                color:'red',
                font:'small-caption',
                fontWeight:'bold'
              }}
              >Non Editable</span>
              
            </FormGroup>
            <FormGroup>
              <Label for="number" >Enter MobileNo</Label>
              <Input
                type="number"
                placeholder='Enter MobileNo'
                id="number"
                onChange={(e) => handleChange(e, 'mobileNo')}
                value={profileData.mobileNo}
              />
            </FormGroup>
             
          </Col>
        </Row>
        
        <Button color='primary' type="submit">Update</Button>
      </Form>
      <div className="toast-container">
          <ToastContainer />
        </div>
    </div>
  );
};

export default Profile;
