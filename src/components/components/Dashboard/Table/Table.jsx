import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

import { initialPassState } from '../../Data/Data';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Delivered') {
    return {
      background: '#59bfff',
      color: 'white',
    };
  } else if (status === 'Pending') {
    return {
      background: 'rgb(251, 182, 182)',
      color: 'red',
    };
  }
};

export default function BasicTable() {
  const [profileData, setProfileData] = useState(initialPassState);
  const { user } = useAuth0();
  useEffect(() => {
    // Fetch user data when the component mounts
    async function fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8081/api/users/964566458140');
        const userData = response.data; // Assuming response.data holds user data
        setProfileData(userData);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);


  return (
    <div className="Table mt-4">
      
      <TableContainer
        component={Paper}
        style={{
          boxShadow: '0px 13px 20px 0px #80808029',
        }}
      >
        <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
          <Table sx={{ minWidth: 650 }} aria-label="movie table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Array.isArray(profileData.paymentHistory) &&
                profileData.paymentHistory.map((payments, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {payments.transactionId}
                    </TableCell>
                    <TableCell align="right">{payments.amount}</TableCell>
                    <TableCell align="right">{payments.date}</TableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );

}
