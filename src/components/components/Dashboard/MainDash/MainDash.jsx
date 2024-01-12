// MainDash.jsx
import React, { useContext, useEffect, useState } from 'react';
import './MainDash.css';
import { UserContext } from '../App/DashboardApp.jsx'
import Cards from '../Cards/Cards.jsx';
import PaymentHistory from './PaymentHistory.jsx';
import Profile from './Profile.jsx';
import DownloadPass from './DownloadPass.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Button } from 'reactstrap';
const MainDash = ({ selectedTab }) => {
  const { user, isAuthenticated } = useAuth0();
  const { profileData, setProfileData } = useContext(UserContext); // Access profileData from context
  const [showPass, setShowPass] = useState(false);
  const [activePass, setActivePass] = useState({
    type: '',
    activatedOn: '',
    validity: '',
    status: '',
    renewalDate: '',
    passId: '',
    source:'',
    destination:''
  })
  useEffect(() => {
    // Fetch user data only if the user is authenticated
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
    }
  }, [isAuthenticated, user]);

  const myPass = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/users/passes/current/' + profileData.aadharNo);
      const currentDatePasses = response.data;
      setActivePass(currentDatePasses);
      setShowPass(true);
      // Process the current date passes as needed
     // alert(JSON.stringify(currentDatePasses));
    } catch (error) {
      console.error('Error fetching current date passes:', error);
    }
  }
  const handleCloseModal = () => {
    setShowPass(false);
  };
  return (
    <div>
      <div className="heading">
        <h1>Dashboard</h1>

      </div>
      <div className="user">
        Welcome {isAuthenticated && profileData.name}
      </div>
      {selectedTab === 0 && (
        <>
          <Cards />

          {isAuthenticated && profileData.passId &&
            <p>You have not selected any pass as of now</p>

          }

          <Button onClick={myPass}>Show Current Pass</Button>
          <div className="myPass">
            {showPass && activePass.passId!='' && (
              <div className="modal-overlay" style={{ display: showPass ? 'flex' : 'none' }}>
                <div className="modal-content">
                  <div className="aadhar-card">
                    <img className="modal-photo" src={user.picture} alt="User" />
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
                      <strong>Pass Route : {activePass.source} - {activePass.destination} </strong>
                    </div>

                  </div>
                  </div>
                 
                  <Button onClick={handleCloseModal}>Close</Button>
                </div>
              </div>)}

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
