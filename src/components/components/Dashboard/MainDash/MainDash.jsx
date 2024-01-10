// MainDash.jsx
import React, { useContext } from 'react';
import './MainDash.css';
import { UserContext} from '../App/DashboardApp.jsx'
import Cards from '../Cards/Cards.jsx';
import PaymentHistory from './PaymentHistory.jsx';
import Profile from './Profile.jsx';
import DownloadPass from './DownloadPass.jsx';
import { useAuth0 } from '@auth0/auth0-react';

const MainDash = ({ selectedTab }) => {
  const { user, isAuthenticated } = useAuth0();
  const {profileData,setProfileData} = useContext(UserContext); // Access profileData from context
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
          
        
        </>
      )}
      {selectedTab === 1 && <Profile />}
      {selectedTab === 2 && <PaymentHistory />}
      {selectedTab === 3 && <DownloadPass />}
    </div>
  );
};

export default MainDash;
