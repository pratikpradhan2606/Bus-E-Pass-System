import React, { createContext, useContext, useState, useEffect } from 'react';
import './DashboardApp.css'
import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';
import RightSide from '../RightSide/RightSide';
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react';
import { initialPassState } from '../../Data/Data.js';

export const UserContext = createContext();

function DashboardApp() {
  const [selectedTab, setSelectedTab] = useState(0);
  const {user,isAuthenticated} = useAuth0();
  const [profileData, setProfileData] = useState(initialPassState);
  
  useEffect(() => {
    // Fetch user data only if the user is authenticated
    if (isAuthenticated) {
      async function fetchUserData() {
        try {
          const initialPassState1 = {
            aadharNo: 2323,
            name: user.nickname,
            mobileNo: '',
            email: user.email,
            address: {
              street: '',
              city: '',
              state: '',
              zipCode: ''
            },
            busPass: {
              type: '',
              activatedOn: '',
              validity: '',
              status: '',
              renewalDate: '',
              passId: ''
            },
            paymentHistory: [{
              transactionId: '',
              amount: '',
              date: ''
            }],
          };

              console.log(initialPassState1)
              const response2 = await axios.post('http://localhost:8081/api/users/',initialPassState1);
              const userData = response2.data;
              setProfileData(userData);
              
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }

      fetchUserData();
    }
  }, [isAuthenticated, user]);
  return (
    <div className="App">
      
        <div className="AppGlass">
         <UserContext.Provider value={{profileData,setProfileData}}>

         <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
          <MainDash selectedTab={selectedTab}/>
          
         </UserContext.Provider>
        </div>
    </div>
  );
}

export default DashboardApp;
