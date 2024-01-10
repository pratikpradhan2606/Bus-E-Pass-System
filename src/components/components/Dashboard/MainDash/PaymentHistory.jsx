import React, {useState, useEffect} from 'react';
import BasicTable  from '../Table/Table.jsx';
import { initialPassState } from '../../Data/Data';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
const PaymentHistory = () => {
  const [profileData,setProfileData] = useState(initialPassState);
  const {user} = useAuth0();
  useEffect(()=>{
     // Fetch user data when the component mounts
     async function fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8081/api/users/email/'+user.email);
        const userData = response.data; // Assuming response.data holds user data
        setProfileData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  },[]);
  return (
    <div>
      <h6>Pass History</h6>
      <BasicTable/>
    </div>
  );
};

export default PaymentHistory;
