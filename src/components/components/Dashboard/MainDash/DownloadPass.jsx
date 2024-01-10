import React, {useState, useEffect, useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './DownloadPass.css'
import { UserContext} from '../App/DashboardApp.jsx';
import { Button } from 'reactstrap';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
const DownloadPass = () => {

  const {profileData,setProfileData} = useContext(UserContext); // Access profileData from context
  const notify = () => {
    // Customizing the toast position
    toast("Password downloaded successfully!")
  
  }
  
 
  return (
    <div >
      <h1>User DownloadPass</h1>

      <div className="printpass">
          <h3>Aadhar No : {profileData.aadharNo}</h3>
          <h3>Type : {profileData.busPass.type}</h3>
          <h3>Valid Upto {profileData.busPass.validity}</h3>
          <h3>PassID : {profileData.busPass.passId}</h3>
          <h3>Activated On : {profileData.busPass.activatedOn}</h3>
      </div>
      <Button onClick={notify}>Download</Button>
      

      
      
    </div>
  );
};

export default DownloadPass;
