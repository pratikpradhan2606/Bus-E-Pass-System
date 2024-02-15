// MainDash.jsx
import React, { useContext, useEffect, useState } from 'react';
import './MainDash.css';
import { UserContext } from '../App/DashboardApp.jsx';
import Cards from '../Cards/Cards.jsx';
import PaymentHistory from './PaymentHistory.jsx';
import Profile from './Profile.jsx';
import DownloadPass from './DownloadPass.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';
import html2canvas from 'html2canvas';
const MainDash = ({ selectedTab }) => {
  const { user, isAuthenticated } = useAuth0();
  const { profileData, setProfileData } = useContext(UserContext);
  const [showPass, setShowPass] = useState(false);
  const [activePass, setActivePass] = useState({
    type: '',
    activatedOn: '',
    validity: '',
    status: '',
    renewalDate: '',
    passId: '',
    source: '',
    destination: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const response2 = await axios.get('http://localhost:8081/api/users/' + profileData.aadharNo);
          const userData = response2.data;
          setProfileData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }

      fetchUserData();
      myPass();
    };
  }, [isAuthenticated, user]);

  const handleDownload = async () => {
    try {
      const modalContent = document.getElementById('modal-content');

      // Capture modal content
      const contentCanvas = await html2canvas(modalContent);

      // Convert the canvas to a data URL
      const dataUrl = contentCanvas.toDataURL('image/png');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'download.png'; // Specify the desired file name

      // Simulate a click on the link to trigger the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const myPass = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/users/passes/current/' + profileData.aadharNo);
      const currentDatePasses = response.data;

      if (currentDatePasses === '') {
        alert("You don't have an active Pass");
        return;
      }
      setActivePass(currentDatePasses);
      setShowPass(true);
    } catch (error) {
      console.error('Error fetching current date passes:', error);
    }
  };

  const handleCloseModal = () => {
    setShowPass(false);
  };

  return (
    <div>
      <div className="heading">
        <h2>Dashboard</h2>
      </div>
      
      <hr />
      {selectedTab === 0 && (
        <>
          
          <div className="heading-dashboad">
              <h4>Your Journey, Your Bus Pass – Choose Wisely</h4>
          </div>
          <div className="cards-container">
            <Cards />
          </div>
          <br />
          <div className="centered-card glowing-border">
            <p>Click on Below Show Current Pass to see your Current Pass</p>
            <span style={{ color: "white", marginBottom:"2%" }}>
              <li>If you have a pass, it will show you the option to download</li>
            </span>
            <Button onClick={myPass}>Show Current Pass</Button>
          </div>
          <div className="myPass">
            {showPass && activePass.passId !== '' && (
              <div className="modal-overlay" style={{ display: showPass ? 'flex' : 'none' }}>
                <div className="modal-content" id="modal-content">
                  <div className="aadhar-card">
                    {
                    //<img className="modal-photo" id="modal-photo" src={user.picture} alt="User" />
                    }
                    <div className="aadhar-details">
                      <div>
                        <strong>Aadhar Number:</strong> {profileData.aadharNo}
                      </div>
                    </div>
                    <div className="aadhar-details">
                      <div>
                        <strong>Name:</strong> {profileData.name}
                      </div>
                    </div>
                    <div className="aadhar-details">
                      <div>
                        <strong>Email:</strong> {profileData.email}
                      </div>
                    </div>
                    <div className="aadhar-details">
                      <div>
                        <strong>Mobile No:</strong> {profileData.mobileNo}
                      </div>
                    </div>
                    <div className="aadhar-details">
                      <div>
                        <strong>Pass Id :</strong> {activePass.passId}
                      </div>
                    </div>
                    <div className="aadhar-details">
                      <div>
                        <strong>Pass Route: {activePass.source} - {activePass.destination}</strong>
                      </div>
                    </div>
                    <Row className="justify-content-between">
                      <Col>
                        <Button onClick={handleCloseModal}>Close</Button>
                      </Col>
                      <Col>
                        <Button onClick={handleDownload}>Download</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      {selectedTab === 1 && <Profile />}
      {selectedTab === 2 && <PaymentHistory />}
      {selectedTab === 3 && <DownloadPass />}
    </div>
  );
};

export default MainDash;
