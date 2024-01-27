import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [aadharId, setAadharId] = useState('');
  const [aadharIdFilled, setAadharIdFilled] = useState(false);

  useEffect(() => {
    // Check if the user has an Aadhar ID
    if (isAuthenticated && user && user.email_verified && user.aadharId) {
      setAadharIdFilled(true);
    }
  }, [isAuthenticated, user]);

  const handleLogin = async (e) => {
    loginWithRedirect({
      redirectUri: `${window.location.origin}/dashboard`, // Replace with your dashboard route
    });
  };

  const handleAadharIdSubmit = async (e) => {
    e.preventDefault();
    // Save Aadhar ID to the backend
    try {
      await axios.post('YOUR_BACKEND_API_URL', { aadharId });
      setAadharIdFilled(true);
    } catch (error) {
      console.error('Error saving Aadhar ID:', error);
    }
  };

  return (
    <div>
      {isAuthenticated && !aadharIdFilled ? (
        // Render Aadhar ID input form
        <form onSubmit={handleAadharIdSubmit}>
          <label>
            Aadhar ID:
            <input type="text" value={aadharId} onChange={(e) => setAadharId(e.target.value)} />
          </label>
          <button type="submit">Submit Aadhar ID</button>
        </form>
      ) : (
        // Render login button
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
