import React, { createContext, useContext, useState, useEffect } from 'react';
import './DashboardApp.css';
import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';
import Updates from '../Updates/Updates.jsx';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { initialPassState } from '../../Data/Data.js';
import { Button } from 'reactstrap';

export const UserContext = createContext();

function DashboardApp() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [profileData, setProfileData] = useState(initialPassState);

  useEffect(() => {
    // Fetch user data only if the user is authenticated
    if (isAuthenticated) {
      async function fetchUserData() {
        const initialPassState1 = {
          aadharNo: 0,
          name: user.nickname,
          mobileNo: '',
          email: user.email,
          address: {
            street: '',
            city: '',
            state: '',
            zipCode: ''
          },
          busPass: [
            {
              type: '',
              activatedOn: '',
              validity: '',
              status: '',
              renewalDate: '',
              passId: ''
            }
          ],
          paymentHistory: [
            {
              transactionId: '',
              amount: '',
              date: ''
            }
          ]
        };

        try {
          try {
              const isEmailPresent = await axios.get('http://localhost:8081/api/users/email/' + user.email);
              const data = isEmailPresent.data;
              if (data) {
                //alert('User Present');
              } else {
                let isValidAadhar = false;
                let aadharNo;
              
                do {
                  // Prompt the user to enter Aadhar ID
                  aadharNo = prompt('Please Enter Aadhar ID no');
              
                  // Regular expression pattern for Aadhar ID validation
                  const aadharPattern = /^\d{12}$/;
              
                  // Check if the entered Aadhar ID matches the pattern
                  if (aadharPattern.test(aadharNo)) {
                    isValidAadhar = true;
                  } else {
                    // If Aadhar ID is not valid, prompt the user again
                    alert('Invalid Aadhar ID. Please enter a valid 12-digit Aadhar ID with no special characters.');
                  }
                } while (!isValidAadhar);
              
              
                initialPassState1.aadharNo = aadharNo;
              }
            } catch (error) {
              console.log('Error in getting AADHAR from User Data');
            }
          console.log(initialPassState1);
          const response2 = await axios.post('http://localhost:8081/api/users/', initialPassState1);
          const userData = response2.data;
          setProfileData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }

      fetchUserData();
      // checkUserAlreadyExists();
    }
  }, [isAuthenticated, user]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="AppGlass">
          <UserContext.Provider value={{ profileData, setProfileData }}>
            <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
            <MainDash selectedTab={selectedTab} />
            <Updates />
          </UserContext.Provider>
        </div>
      ) : (
        <div className="login-message">
          <p>Please log in before accessing the dashboard.</p>
          <Button type="submit" onClick={() => loginWithRedirect({
            redirectUri: `${window.location.origin}/dashboard`
          }
          )
          }
          >Log In</Button>
        </div>
      )}
    </div>
  );
}

export default DashboardApp;