import React, { useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './DownloadPass.css';
import { UserContext } from '../App/DashboardApp.jsx';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DownloadPass = () => {
  const { user, isAuthenticated } = useAuth0();
  const { profileData, setProfileData } = useContext(UserContext);
  const [passGenerated, setPassGenerated] = useState(false); // State to trigger data reload

  const fetchUserData = async () => {
    try {
      if (isAuthenticated) {
        const response = await axios.get(`http://localhost:8081/api/users/${profileData.aadharNo}`);
        const userData = response.data;
        setProfileData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch data on component mount and whenever passGenerated changes
  useEffect(() => {
    fetchUserData();
  }, [isAuthenticated, user, passGenerated]);

  const handleDownload = () => {
    // Logic for generating pass...

    // Trigger a reload of data after generating the pass
    setPassGenerated(true);
  };

  return (

    <div className="Table mt-4">

      <TableContainer
        component={Paper}
        style={{
          boxShadow: '0px 13px 20px 0px #80808029',
        }}
      >
        <div style={{ maxHeight: '400px', overflowY: 'scroll'} }>
          <Table sx={{ minWidth: 650 }} aria-label="movie table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Amount</TableCell>
                
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profileData.busPasses &&
                profileData.busPasses.map((pass, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {pass.passId}
                    </TableCell>
                    <TableCell align="right">{pass.type}</TableCell>
                    <TableCell align="right">{ pass.type==='Daily' ? 40 : pass.type === 'Monthly'? 1000 : 250 }</TableCell>
                    <TableCell align="right">{pass.activatedOn}</TableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
};

export default DownloadPass;
