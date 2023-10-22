import { Col, Container, Row } from "reactstrap";
import Base from "../components/Base";
import React, {  useState } from 'react';
import login from '../assets/images/register1.webp'
const Login = ({}) => {
  
  const [aadharNo, setAadharNo] = useState('');  // State for Aadhar Number
  const [password, setPassword] = useState('');  // State for Password
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
                          
  }

  return (
    <Base>
      <Container>
        <br></br>
        <Row>
          <Col md='6' className="mt-4">
            <form onSubmit={handleSubmit} className="p-1"> {/* Add onSubmit event handler */}
              <center><h2>Login Here</h2></center>
              <div className="mb-3">
                <label>Aadhar No.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Aadhar No."
                  value={aadharNo}
                  onChange={(e) => setAadharNo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </Col>
          <Col md="6">
            <img
              src={login}
              alt="Registration Page"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Login;
